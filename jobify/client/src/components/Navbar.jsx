import Wrapper from "../assets/wrappers/Navbar";
import {FaAlignLeft} from 'react-icons/fa'
import Logo from './Logo'
import {useDashboardContext} from '../pages/DashBoardLayout'
import { Link } from "react-router-dom";
import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  const {toggleSidebar} = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft/>
        </button>
        <div>
        <Link to='/'><Logo /></Link>
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
        <ThemeToggle/>
          <LogoutContainer/>
        </div>
      </div>
      
      
      </Wrapper>
  )
}

export default Navbar