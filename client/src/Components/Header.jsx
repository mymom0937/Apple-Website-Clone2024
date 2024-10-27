import React, { Component } from "react";
import logo from "../../assets/commonResource/images/icons/logo-sm.png";
// import logo from "../../public/commonResource/images/icons/logo-sm.png";
import NavMap from "./NavMap.jsx";
class Nav extends Component {
  render() {
    return (
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo} />
            </a>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <NavMap />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
