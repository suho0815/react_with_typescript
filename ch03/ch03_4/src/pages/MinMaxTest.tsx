import {Title, Div} from '../components'
import * as D from '../data'

export default function MinMaxTest() {
  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>MinMaxTest</Title>
      <Div className="p-4 bg-gray-300">
        <Div src={D.randomImage(800,300)} className='bg-cover'>
          <Div className='w-1/2 bg-blue-500 h-80'
            minHeight='500px'minWidth='300px'/>
        </Div>
      </Div>
    </section>
  )
}
