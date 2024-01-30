import Wrapper from "../assets/wrappers/BigSidebar"
import NavLinks from "./NavLinks"
import { Link } from "react-router-dom"
import Logo from "./Logo"
import { useDashboardContext } from "../pages/DashBoardLayout"

const BigSidebar = () => {
  const{showSidebar} = useDashboardContext()

  return (
    <Wrapper>
      <div className={showSidebar?'sidebar-container':'sidebar-container show-sidebar'}>
        <div className="content">
          <header className="logo">
            
            <Link to='/'><Logo /></Link>
            
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar