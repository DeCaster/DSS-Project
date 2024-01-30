import styled from 'styled-components';

const Wrapper = styled.button`
 background: transparent;//arka planini seffaf yapar
 border-color: transparent;
 width: 3.5rem;
 height: 2rem;
 display: grid;
 place-items: center;
 cursor: pointer;
 .toggle-icon{
  font-size: 1.17rem;
  color: var(--text-color);

 }
`;
export default Wrapper;
