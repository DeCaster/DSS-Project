// import styled from "styled-components";
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using it
import {Logo} from '../components'
// const StyledBtn = styled.button`
//   font-size: 1.5rem;
//   background: red;
//   color: white;
// `

const Landing = () => {
  return (
    <Wrapper>
      <nav>
      <Link to='/'><Logo /></Link>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>
            Im baby microdosing fingerstache vape, banh mi bitters mukbang post-ironic pug...
            {/* Your text content */}
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
