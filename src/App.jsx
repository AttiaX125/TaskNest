import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';

// Pages
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import Tasks from './Components/Tasks/Tasks';

// Layouts
import Layout from './Components/Layout/Layout';
import BlankLayout from './Components/BlankLayout/BlankLayout';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';


function App() {
  const [userData, setUserData] = useState(null);
  function saveUserData(){
   let incodedToken = localStorage.getItem('userToken');
   let decodedToken =jwtDecode(incodedToken);
   setUserData(decodedToken);
   console.log(decodedToken);
  }
  const router = createBrowserRouter([
    // Routes with Navbar (sidebar)
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },           // `/`
        { path: 'dashboard', element: <Dashboard /> },     // `/dashboard`
        { path: 'tasks', element: <Tasks /> },             // `/tasks`
        { path: 'profile', element: <Profile userData={userData}/> },         // `/profile`
        { path: '*', element: <Navigate to="/dashboard" /> }
      ]
    },
    // Routes without Navbar (login & signup)
    {
      path: '/',
      element: <BlankLayout />,
      children: [
        { path: 'login', element: <Login saveUserData={saveUserData}/> },             // `/login`
        { path: 'signup', element: <SignUp /> }            // `/signup`
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
