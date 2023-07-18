import {useRef, useCallback} from 'react'
import {Title} from '../components'
import type {ValidatableInputMethods} from '../theme/daisyui'
import {ValidatableInput} from '../theme/daisyui'

export default function ValidatableInputTest() {
  const methodsRef = useRef<ValidatableInputMethods>(null)

  const ValidateEmail = useCallback(() => {
    if (methodsRef.current) {
      const [valid, validErrorMessage] = methodsRef.current.validate()
      if (valid) alert(`${validErrorMessage}는 유효한 이메일 주소임.`)
      else alert(validErrorMessage)
    }
  }, [])
  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>ValidatableInputTest</Title>
      <div className="flex justify-center mt-4">
        <div className='flex flex-col w-1/3 p-2'>
          <ValidatableInput type="email" ref={methodsRef}
          className="input-primary" />
          <button className='mt-4 btn btn-primary' onClick={ValidateEmail}>
            validate
          </button>
        </div>
      </div>
    </section>
  )
}
