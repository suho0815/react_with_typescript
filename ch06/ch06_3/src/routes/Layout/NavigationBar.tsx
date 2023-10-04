import {Link as RRLink} from 'react-router-dom'
import {Link} from '../../components'
import {useAuth} from '../../contexts'

export default function NavigationBar() {
  const {loggedUser} = useAuth()

  return (
    <div className="flex justify-between bg-base-100">
      <div className="flex p-2 navbar ">
        <Link to="/" className="btn btn-link">
          Home
        </Link>
        {loggedUser && (
          <Link to="/board" className="btn btn-link ml-4">
            Board
          </Link>
        )}
      </div>
      <div className="flex p-2 items-center">
        {!loggedUser && (
          <RRLink to="/login" className="btn btn-primary btn-sm">
            Login
          </RRLink>
        )}
        {!loggedUser && (
          <RRLink to="/signup" className="ml-4 btn btn-primary btn-outline btn-sm">
            Signup
          </RRLink>
        )}
        {loggedUser && (
          <RRLink to="/logout" className="ml-4 mr-4">
            LOGOUT
          </RRLink>
        )}
      </div>
    </div>
  )
}
