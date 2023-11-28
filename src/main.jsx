import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Layout/Dashboard';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Main from './Layout/Main';
import PrivateRoute from './Route/PrivateRoute';
import DonorProfile from './Pages/Profile/DonorProfile';
import CreateDonationRequest from './Pages/CreateDonationRequest/CreateDonationRequest';
import MyDonationRequest from './Pages/MyDonationRequest/MyDonationRequest';
import AuthContext from './Provider/AuthContext';
import DashboardHome from './Pages/DashboardHome/DashboardHome';


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
    element: <PrivateRoute> {<Dashboard />}</PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome></DashboardHome>
      },
      {
        path: 'my-donation-request',
        element: <MyDonationRequest />
      },
      {
        path: 'create-donation-request',
        element: <CreateDonationRequest />,
      },
      {
        path: 'profile',
        element: <DonorProfile />,
      },
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
