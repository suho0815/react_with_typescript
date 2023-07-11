import {Title, Div, Icon, Overlay} from '../components'

export default function OverlayTest() {
  return (
    <section className="mt-4">
      <Title>OverlayTest</Title>
      <Overlay opacityClass='bg-black/70'>
        <Div className='relative flex items-center justify-center w-1/2 p-8 bg-white h-1/2'>
          <Div className='absolute' right='1rem' top='1rem'>
            <Icon name='close' className='text-gray-500'/>
          </Div>
        </Div>
      </Overlay>
    </section>
  )
}
