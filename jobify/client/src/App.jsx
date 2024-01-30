import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashBoardLayout,
  Error,
  AddJob,
  Stats,
  AllJobss,
  Profile,
  Admin,
  EditJob
} from './pages'
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as DashBoardLoader } from "./pages/DashBoardLayout";
import { action as addJobAction } from "./pages/AddJob";
import { loader as allJobsLoader } from "./pages/AllJobss";
import { loader as adminLoader } from "./pages/Admin";

export const checkDefaultTheme = () =>{
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme',isDarkTheme)
  return isDarkTheme

}
checkDefaultTheme()


const router = createBrowserRouter([
    {
      //parent is a home page the other one is a children.
      // thats why we use children
        path:'/',
        element:<HomeLayout/>,
        errorElement:<Error/>,
        children : [
          {
            index:true,
            element:<Landing/>
          },
          {
            path:'/register',
            element:<Register/>,
            action:registerAction,
          },
          {
            path:'/login',
            element:<Login/>,
            action:loginAction,
          },
          {
            path:'dashboard',
            element:<DashBoardLayout/>,
            loader:DashBoardLoader,
            children:[
              {
                index:true,
                element:<AddJob/>,
                action:addJobAction
              },
              {
                path:'stats',
                element:<Stats/>
              },
              {
                path:'all-jobss',
                element:<AllJobss/>,
                loader:allJobsLoader,
              },
              {
                path:'profile',
                element:<Profile/>
              },
              {
                path:'admin',
                element:<Admin/>,
                loader:adminLoader,
              },
              {
                path:'edit-job',
                element:<EditJob/>,

              }

            ]
          },

        ]
    },
    
   
])

const App = () =>{
  return (
    <RouterProvider router={router}/>
  )
}

export default App