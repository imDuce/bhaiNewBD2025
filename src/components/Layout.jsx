import React from "react";
import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "./Navbar/Navbar.jsx";
// import Navbar3 from "./Navbar/Navbar3.jsx";
import Navbar4 from "./Navbar/NavBar4.jsx";
import MousePointer from "./MousePointer/MousePointer.jsx";

const Layout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/egg"];

  return (
    <>
      <Outlet />
      {/* <MousePointer/> */}
      {/* <Navbar /> */}
      <Navbar4 />
      {/* {!hideNavbarRoutes.includes(location.pathname) && } */}
    </>
  );
};

export default Layout;
