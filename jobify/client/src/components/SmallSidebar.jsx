import { FaTimes } from "react-icons/fa";
import React from "react"; // Import React if not already imported
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashBoardLayout";
import Logo from './Logo';
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import NavLinks from './NavLinks';
import {Link} from 'react-router-dom'

const SmallSidebar = () => {
  const { toggleSidebar, showSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}><FaTimes /></button>
          <header>
            <div className="logo_1">
              <Link to='/'><Logo /></Link>
            </div>
          </header>
          <NavLinks/>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
