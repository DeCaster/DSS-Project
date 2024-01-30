import styled from 'styled-components';

const Wrapper = styled.section`
 nav{
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
 }
 .page{
  min-height: calc(100vh- var(--nav-height));
  display: grid;
  align-items: center;
  margin-top: 11.5rem;
 }
 h1{
  font-weight: 800;
  span{
    color: var(--primary-500);
  }
  margin-bottom: 1.5rem;
 }
 p{
  line-height: 1.5;
  color: var(--text-secondary-color);
  margin-bottom: 1.5rem;
  max-width: 35em;
 }
 .register-link{
  margin-right: 1.2rem;
 }
 .main-img{
  display: none;
 }
 .btn{
  padding: 0.75rem 2rem;
 }
 @media (min-width:992px){
  .page{
    grid-template-columns: 1fr 400px;
    column-gap:3rem
  }
  .main-img{
    display: block;
  }
 }
`;
export default Wrapper;
