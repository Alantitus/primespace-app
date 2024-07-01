import './App.css'
import Homepage from './pages/Homepage/Homepage'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Listpage from './pages/Listpage/Listpage'
import Layout from './pages/Layout/Layout'
import Singlepage from './pages/Singlepage/Singlepage'
import Profilepage from './pages/Profile/Profilepage'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

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
        path: "/list",
        element: <Listpage/>,
        
      },
       {
        path: "/:id",
        element: <Singlepage/>,
        
      }, 
       {
        path: "/profile",
        element: <Profilepage/>,
        
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

   

  ]);

  return (
    
        
        <RouterProvider router={router}/>

        
    
  )
}

export default App
