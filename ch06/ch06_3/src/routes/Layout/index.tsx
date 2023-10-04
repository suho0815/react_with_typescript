import {Outlet} from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default function CopyMe() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  )
}
