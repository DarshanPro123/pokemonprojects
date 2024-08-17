import React from "react";
import "./Home.css";
import About from "../About/About";
import DashBoard from "../DashBoard/DashBoard";

const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="overlap-dark"></div>
        <div className="content_box">
          <h2>
            <span>Pokemon</span> Info...
          </h2>
          <button>
            <a href="/dashboard">Info</a>
          </button>
        </div>
      </div>
      <About />
      <div className="dashbord">
        {" "}
        <DashBoard />
      </div>
    </>
  );
};

export default Home;
