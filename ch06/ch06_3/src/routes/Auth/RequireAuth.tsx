import type {FC, PropsWithChildren} from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'

type RequireAuthProps = {}

const RequireAuth: FC<PropsWithChildren<RequireAuthProps>> = ({children}) => {
  const {loggedUser} = useAuth()
  const Navigate = useNavigate()

  useEffect(() => {
    if (!loggedUser) Navigate(-1)
  }, [loggedUser, Navigate])

  return <>{children}</>
}
export default RequireAuth
