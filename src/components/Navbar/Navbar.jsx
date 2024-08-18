import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Loading from "./components/Loading/Loading.jsx";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 1000); // Simulate a loading delay of 1 second
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {loading && <Loading />}
      <div>
        <div className={`toggle ${isNavOpen ? "open" : ""}`}>
          <div className="logo">
            <Link to={"/"}>
              <h1>
                <span>Pokemon</span> Info
              </h1>
            </Link>
          </div>

          <button onClick={toggleNav}>
            <IoReorderThreeOutline />
          </button>
          <ul className={isNavOpen ? "nav-links open" : "nav-links"}>
            {/* close button  */}
            {isNavOpen ? <button onClick={toggleNav}>&#x2715;</button> : ""}
            <li>
              <NavLink
                activeClassname="active"
                to={"/"}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/");
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassname="active"
                to={"/about"}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/about");
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard"}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/dashboard");
                }}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
