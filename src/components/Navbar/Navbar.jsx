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
            <button onClick={toggleNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.71A1 1 0 105.7 7.12L10.59 12l-4.88 4.88a1 1 0 101.42 1.42L12 13.41l4.88 4.88a1 1 0 001.42-1.42L13.41 12l4.88-4.88a1 1 0 000-1.41z"
                />
              </svg>
            </button>
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
