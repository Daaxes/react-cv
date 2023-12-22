import { Outlet } from 'react-router-dom'
import Topbar from '../Topbar'
import Sidebar from '../Sidebar'
import './index.css'

const Layout = () => {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      <div className="page">
        <Outlet />
        <span className="tags bottom-tags">
          <br />
        </span>
      </div>
    </div>
  )
}

export default Layout