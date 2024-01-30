import { useRouteError,Link } from "react-router-dom"
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if(error.status === 404){
    return <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! page not found</h3>
        <p>we cant seem to find the page you are looking for</p>
        <Link to='./dashboard'>back home</Link>
      </div>
    </Wrapper>
  }

  return (
    <Wrapper>
      <div>
      <h1>Error page</h1>
      </div>
    </Wrapper>
  )
}

export default Error