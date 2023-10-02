import {createServer} from 'http'
import {createExpressApp} from './express'
import {makeDir} from './utils'
import {getPublicDirPath} from './config'
// mongodb 연결
import type {MongoDB} from './mongodb'
import {connectAndUseDB} from './mongodb'

makeDir(getPublicDirPath())

const ConnectCallback = (db: MongoDB) => {
  const hostname = 'localhost',
    port = 4000

  createServer(createExpressApp()).listen(port, () =>
    console.log(`connect http://${hostname}:${port}`)
  )
}

connectAndUseDB(ConnectCallback, 'ch07')
