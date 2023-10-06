import {useMemo} from 'react'
import CustomerComment from './CustomerComment'
import {Div} from '../../components'
import * as D from '../../data'

export default function Promotion() {
  const comment = useMemo(() => D.makeArray(3).map(D.makeRandomCustomerComment), [])
  const children = useMemo(
    () =>
      comment.map(comment => (
        <CustomerComment key={comment.uuid} customerComment={comment} />
      )),
    [comment]
  )
  return (
    <section className="w-full mt-4">
      <h2 className="ml-4 text-5xl font-bold">what our customers say:</h2>
      <div className="flex justify-between w-full p-4">
        <Div
          minWidth="15%"
          width="15%"
          className="flex items-center justify-center text-white bg-primary">
          Your message here
        </Div>
        <div className="flex flex-wrap justify-center p-4 mt-4">{children}</div>
        <Div
          minWidth="15%"
          width="15%"
          className="flex items-center justify-center text-white bg-primary">
          Your advertizement here
        </Div>
      </div>
    </section>
  )
}
