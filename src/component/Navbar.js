import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            Home
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/Login"} className="nav-link">
                  <button className="btn btn-danger"> login </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Signin"} className="nav-link">
                  <button className="btn btn-info">Sign in</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
