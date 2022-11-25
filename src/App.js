import React from 'react'
import Login from './pages/authentication/Login/Login'
import Signup from './pages/authentication/Signup/Signup'
import Homepage from './pages/landing_page/Homepage'
import Dashboard from './pages/dashboard/Dashboard'
import Blackbox from './pages/dashboard/blackbox/blackbox'
import Product from './pages/Fillters/Product'
import User from './pages/authentication/User_Profile/User'
import Main_profile from './pages/authentication/User_Profile/Main_profile'
import Login_confirmation from './pages/authentication/login_confirm/Login_confirmation'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBarLayout from './Component/Layout/SideBarLayout'
const App = () => {
  return (
    <Homepage />,
    <Login />,
    <Signup />,
    <User/>,
    <Main_profile/>,
    <Dashboard />,
    <Product/>,
    <Login_confirmation/>,
    <BrowserRouter>
        <Routes>
          <Route>
          <Route exact path='/' element={<Homepage />} />
<<<<<<< HEAD
          <Route exact path='Login' element={<Login />} />
          <Route exact path='Signup' element={<Signup />} />
          <Route exact path='Dashboard' element={<Dashboard />} />
          <Route exact path='Blackbox' element={<Blackbox />} />
          <Route exact path='Product' element={<Product />} />
          <Route exact path='User' element={<User />} />
          <Route exact path='Mainprofile' element={<Main_profile />} />
          <Route exact path='loginconfirm' element={<Login_confirmation />} />
        </Route>
=======
          <Route exact path='login' element={<Login />} />
            <Route exact path='signup' element={<Signup />} />
            <Route path='/' element={<SideBarLayout />}>
              <Route exact path='dashboard' element={<Dashboard />} />
              <Route exact path='blackbox' element={<Blackbox />} />
              <Route exact path='product' element={<Product />} />
              <Route exact path='user' element={<User />} />
              <Route exact path='mainprofile' element={<Main_profile />} />
            </Route>
          </Route>
>>>>>>> 6d1c1c3dd6ff609cd9375f28a96bf5451f71acda
      </Routes>
    </BrowserRouter>
  )
}

export default App