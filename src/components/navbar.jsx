import React, { Component } from "react";

/*const NavBar = (props) => {
  console.log("NavBar - Rendered");
};*/

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge">{props.totalCounters}</span>
        {props.totalCounters}
      </a>
    </nav>
  );
};

export default NavBar;
