import type {MongoDB} from '../mongodb'
import {Router} from 'express'

export const testRouter = (...args: any[]) => {
  const db: MongoDB = args[0]
  const test = db.collection('test')
  const router = Router()
  return router
    .get('/', async (req, res) => {
      try {
        const findResult = await test.find({}).toArray()
        res.json({ok: true, body: findResult})
      } catch (e) {
        if (e instanceof Error) res.json({ok: false, errorMessage: e.message})
      }
    })
    .get('/:id', async (req, res) => {
      const {id} = req.params
      try {
        const findResult = await test.findOne({id})
        res.json({ok: true, body: findResult})
      } catch (e) {
        if (e instanceof Error) res.json({ok: false, errorMessage: e.message})
      }
    })
    .post('/', async (req, res) => {
      const {body} = req
      try {
        try {
          await test.drop() // 이전 문서 지우기
        } catch (e) {}

        const insertResult = await test.insertOne({id: '1234', ...body})
        const {insertedId} = insertResult
        const findResult = await test.findOne({_id: insertedId})
        res.json({ok: true, body: findResult})
      } catch (e) {
        if (e instanceof Error) res.json({ok: false, errorMessage: e.message})
      }
    })
    .put('/:id', async (req, res) => {
      const {id} = req.params
      const {body} = req

      try {
        const updateResult = await test.findOneAndUpdate(
          {id},
          {$set: body},
          {returnDocument: 'after'}
        )
        res.json({ok: true, body: updateResult?.value})
      } catch (e) {
        if (e instanceof Error) res.json({ok: false, errorMessage: e.message})
      }

      res.json({ok: true, body, id})
    })
    .delete('/:id', async (req, res) => {
      const {id} = req.params
      try {
        await test.deleteOne({id})
        res.json({ok: true})
      } catch (e) {
        if (e instanceof Error) res.json({ok: false, errorMessage: e.message})
      }
    })
}
