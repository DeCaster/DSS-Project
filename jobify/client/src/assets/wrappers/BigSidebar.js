import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  @media(min-width: 992px){
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0,0,0,0.1);
    .sidebar-container{
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: auto;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content{
      position: sticky;
      top: 0;

    }
    .show-sidebar{
      margin-left: 0;
    }
    .logo{
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 17px;
      
    }
    .nav-links{
      padding-top: 2rem;
      display: flex;
      flex-direction: column;

    }
    .nav-link{
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: padding-lesft 0.3s ease-in-out;

      
    }
    .nav-link:hover{
      padding-left: 3rem;
      color: var(--primary-500);
      transition: var(--transition);
    }
    .icon{
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;

    }
    .active{
      color: var(--primary-500);
    }
    .logo_2{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
    .pending{
      background: var(--background-color);
    }

  }
`;
export default Wrapper;
