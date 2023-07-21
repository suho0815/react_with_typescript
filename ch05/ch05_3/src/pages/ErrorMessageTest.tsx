import { Button } from "../theme/daisyui"
import { Title } from "../components"
import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import type { AppState } from "../store"
import * as E from '../store/errorMessage'
import * as D from '../data'

export default function ErrorMessageTest() {
  const dispatch = useDispatch()
  const errorMessage = useSelector<AppState, E.State>(({errorMessage}) => errorMessage)

  const generateErrorMessge = useCallback(()=> {
    dispatch<any>(E.generateErrorMessge(D.randomSentence()))
  }, [dispatch])

  return (
    <section className="mt-4">
      <Title>ErrorMessageTest</Title>
      <div className="mt-4">
        <div className="flex justify-center mt-4">
          <Button className="btn btn-sm btn-primary"
          onClick={generateErrorMessge}>
            do timed loading
          </Button>
        </div>
        {errorMessage.length && (
          <div className="flex items-center justify-center bg-red-200">
            <p className="text-2xl text-red-600 text-bold">error: {errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  )
}
