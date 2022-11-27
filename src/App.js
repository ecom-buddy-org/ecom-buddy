import React from "react";
import Login from "./pages/authentication/Login/Login";
import Signup from "./pages/authentication/Signup/Signup";
import ForgetPassword from "./pages/authentication/forgetPassword/ForgetPassword";
import Homepage from "./pages/landing/Homepage";
import Dashboard from "./pages/dashboard/Dashboard";
import Blackbox from "./pages/dashboard/blackbox/Blackbox";
import Product from "./pages/filters/Product";
import Profile from "./pages/dashboard/profile/Profile";
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
