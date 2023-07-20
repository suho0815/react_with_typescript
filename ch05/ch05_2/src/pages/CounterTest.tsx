import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Title, Subtitle } from "../components"
import { Icon } from "../theme/daisyui"
import type { AppState } from "../store"
import * as C from '../store/counter'

export default function CounterTest() {
  const dispatch = useDispatch()

  const counter = useSelector<AppState, C.State>(({counter})=> counter)
  const increse = useCallback(() => dispatch(C.increaseCounter()), [dispatch])
  const decrese = useCallback(() => dispatch(C.decreaseCounter()), [dispatch])
  return (
    <section className="mt-4">
      <Title>CounterTest</Title>
      <div className="flex justify-center mt-4">
        <div>
          <Icon name='add_circle' onClick={increse}/> 
          <Subtitle>{counter}</Subtitle>
          <Icon name='remove_circle' onClick={decrese}/> 
        </div>
      </div>
    </section>
  )
}
