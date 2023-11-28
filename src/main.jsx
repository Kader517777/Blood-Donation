import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Layout/Dashboard';
import AuthContext from './Provider/AuthContext';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Main from './Layout/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: '/', element: <p>Home</p> }
    ]
  },
  { path: 'signup', element: <SignUp /> },
  { path: 'login', element: <Login /> },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'my-donation-request',
        element: <p>jdfjh</p>
      },
      {
        path: 'create-donation-request',
        element: <p>jdfjh</p>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>,
)
