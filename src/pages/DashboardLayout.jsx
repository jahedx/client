import { Outlet } from 'react-router'
import Wrapper from '../assets/wrappers/Dashboard'
import SmaillSidebar from '../components/SmallSidebar'
import BigSidebar from '../components/BigSidebar'
import Navbar from '../components/Navbar'
const DashboardLayout = () => {
  return (
    <Wrapper>
    
    <main className="dashboard">
      <SmaillSidebar/>
      <BigSidebar/>
      <div>
        <Navbar>
        <div className='dashboard-page'>
          <Outlet/>

        </div>
        </Navbar>
      </div>
    </main>
    </Wrapper>
  )
}

export default DashboardLayout