import React from 'react'
import Login from './pages/authentication/Login/Login'
import Signup from './pages/authentication/Signup/Signup'
import Homepage from './pages/landing_page/Homepage'
import Dashboard from './pages/dashboard/Dashboard'
import Blackbox from './pages/dashboard/blackbox/blackbox'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Homepage />,
    <Login />,
    <Signup />,
    <Dashboard />,
    <Blackbox/>,
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='Login' element={<Login />} />
          <Route exact path='Signup' element={<Signup />} />
          <Route exact path='Dashboard' element={<Dashboard />} />
          <Route exact path='Blackbox' element={<Blackbox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App