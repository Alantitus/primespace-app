import './App.css'
import Homepage from './pages/Homepage/Homepage'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Listpage from './pages/Listpage/Listpage'
import {Layout,RequireAuth} from './pages/Layout/Layout'
import Singlepage from './pages/Singlepage/Singlepage'
import Profilepage from './pages/Profile/Profilepage'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import ProfileUpdatePage from './pages/Profileupdate/ProfileUpdatePage'
import Newpostpage from './pages/NewPostPage/Newpostpage'
import { listPageLoader, profilePageLoader, singlePageLoader } from './lib/loaders'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children :[ {
        path: "/",
        element: <Homepage/>,
        
      },
       
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
        
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      }, ]
    },
    {
        path:"/",
        element:<RequireAuth/>,
        children:[
          {
            path: "/profile",
            element: <Profilepage/>,
            loader:profilePageLoader,
            
          },
          {
            path: "/profile/update",
            element: <ProfileUpdatePage/>,
            
            
          },
          {
            path: "/:id",
            element: <Singlepage/>,
            loader:singlePageLoader
            
          }, 
          {
            path: "/list",
            element: <Listpage/>,
            loader:listPageLoader,
            
          },
          {
            path: "/add",
            element: <Newpostpage/>,
            
          },
        ]

        
    }
   

  ]);

  return (
    
        
        <RouterProvider router={router}/>

        
    
  )
}

export default App
