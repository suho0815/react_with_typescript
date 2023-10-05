import {Routes, Route} from 'react-router-dom'
import NoMatch from './NoMatch'
import Layout from './Layout'
import Board from '../pages/Board'
import LandingPage from './LandingPage'
import Signup from './Auth/SignUp'
import Login from './Auth/Login'
import Logout from './Auth/Logout'
import RequireAuth from './Auth/RequireAuth'
import RestTest from './RestTest'

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/rest" element={<RestTest />} />
        <Route
          path="/board"
          element={
            <RequireAuth>
              <Board />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/logout"
        element={
          <RequireAuth>
            <Logout />
          </RequireAuth>
        }
      />
    </Routes>
  )
}
