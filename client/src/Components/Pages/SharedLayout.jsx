import React from "react";
import Navigation from "../Navigation.jsx";
import Footer from "../Footer.jsx";
import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
