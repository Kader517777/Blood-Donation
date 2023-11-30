import React from 'react';
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
import AllBloodDonationRequest from './Pages/AllBloodDonationRequest/AllBloodDonationRequest';
import AllUsers from './Pages/AllUsers/AllUsers';
import AddBlog from './Pages/ContentManagement/AddBlog';
import ContentManagement from './Pages/ContentManagement/ContentManagement';
import AdminRoute from './Route/AdminRoute';
import AdminOrVolunteerRoute from './Route/AdminOrVolunteerRoute';
import Home from './Pages/Home/Home';
import DonationRequest from './Pages/DonationRequest/DonationRequest';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/donor-search',
        element: <p>donation requests</p>,
      },
      {
        path: '/donation-requests',
        element: <DonationRequest />,
      },
      {
        path: '/blog',
        element: <p>blog</p>,
      },
      {
        path: '/blood-donation-details',
        element: <PrivateRoute><p>There is no data</p></PrivateRoute>,
      },
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
      {
        path: 'all-users',
        element: <AdminRoute><AllUsers /></AdminRoute>,
      },
      {
        path: 'all-blood-donation-request',
        element: <AdminOrVolunteerRoute><AllBloodDonationRequest /></AdminOrVolunteerRoute>,
      },
      {
        path: 'content-management',
        element: <AdminOrVolunteerRoute><ContentManagement /></AdminOrVolunteerRoute>,
        children: [
          { path: 'add-blog', element: <AdminRoute><AddBlog /></AdminRoute>, }
        ]
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
