import React from "react";
import Login from "./pages/authentication/Login/Login";
import Signup from "./pages/authentication/Signup/Signup";
import ForgetPassword from "./pages/authentication/forgetPassword/ForgetPassword";
import Homepage from "./pages/landing_page/Homepage";
import Dashboard from "./pages/dashboard/Dashboard";
import Blackbox from "./pages/dashboard/blackbox/blackbox";
import Product from "./pages/Fillters/Product";
import Profile from "./pages/authentication/User_Profile/Main_profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBarLayout from "./Component/Layout/SideBarLayout";

const App = () => {
  return (
    (<Homepage />),
    (<Login />),
    (<Signup />),
    (<ForgetPassword />),
    (<Profile />),
    (<Dashboard />),
    (<Product />),
    (
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="signup" element={<Signup />} />
            <Route exact path="recover-password" element={<ForgetPassword />} />
            <Route exact path="product" element={<Product />} />
            <Route path="/" element={<SideBarLayout />}>
              <Route exact path="dashboard" element={<Dashboard />} />
              <Route exact path="blackbox" element={<Blackbox />} />
              <Route exact path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  );
};

export default App;
