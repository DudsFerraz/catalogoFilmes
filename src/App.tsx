import './App.css'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

import Home from "./Components/Home";
import RegisterMovie from './Components/RegisterMovie';
import EditMovie from './Components/EditMovie';
import DeleteMovie from './Components/DeleteMovie';
import NotFound from './Components/NotFound';
import Menu from './Components/Menu';

const RootLayout = () => (
  <>
    <Menu/>
    <Outlet/>
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'registerMovie',
        element: <RegisterMovie/>
      },
      {
        path: 'editMovie',
        element: <EditMovie/>
      },
      {
        path: 'deleteMovie',
        element: <DeleteMovie/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App