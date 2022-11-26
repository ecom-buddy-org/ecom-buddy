import React from 'react'
import Login from './pages/authentication/Login/Login'
import Signup from './pages/authentication/Signup/Signup'
import Homepage from './pages/landing_page/Homepage'
import Dashboard from './pages/dashboard/Dashboard'
import Blackbox from './pages/dashboard/blackbox/blackbox'
import Product from './pages/Fillters/Product'
import User from './pages/authentication/User_Profile/User'
import Main_profile from './pages/authentication/User_Profile/Main_profile'
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
    <BrowserRouter>
        <Routes>
          <Route>
          <Route exact path='/' element={<Homepage />} />
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
      </Routes>
    </BrowserRouter>
  )
}

export default App