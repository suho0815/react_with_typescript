import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {Modal, ModalAction, ModalContent} from '../../theme/daisyui'
import {useToggle} from '../../hooks'
import {useAuth} from '../../contexts'

export default function Logout() {
  const [open, toggleOpen] = useToggle(true)

  const Navigate = useNavigate()
  const {logout} = useAuth()
  const onAccept = useCallback(() => {
    logout(() => {
      toggleOpen()
      Navigate('/')
    })
  }, [Navigate, toggleOpen, logout])
  const onCancel = useCallback(() => {
    toggleOpen()
    Navigate(-1)
  }, [Navigate, toggleOpen])
  return (
    <Modal className="mt-4">
      <ModalContent
        closeIconClassName="btn-primary btn-outline"
        onCloseIconClicked={onCancel}>
        <p className="text-xl text-center">Are you sure you want to log out?</p>
        <ModalAction>
          <button className="btn btn-primary btn-sm" onClick={onAccept}>
            Logout
          </button>
          <button className="btn btn-secondary btn-sm" onClick={onCancel}>
            Cancel
          </button>
        </ModalAction>
      </ModalContent>
    </Modal>
  )
}
