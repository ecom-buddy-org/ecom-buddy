import React from 'react'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Homepage from './Component/Homepage'
import Dashboard from './Component/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Homepage />,
    <Login />,
    <Signup />,
    <Dashboard/>,
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='Login' element={<Login />} />
          <Route exact path='Signup' element={<Signup />} />
          <Route exact path='Dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App