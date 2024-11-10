import { Outlet } from 'react-router-dom'
import Header from '../containers/Header'

export default function AppFrame() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
