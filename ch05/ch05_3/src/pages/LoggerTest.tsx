import { Title } from "../components"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

export default function LoggerTest() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type: 'hello', payload: 'world'})
  }, [dispatch])

  return (
    <section className="mt-4">
      <Title>LoggerTest</Title>
      <div className="mt-4"></div>
    </section>
  )
}
