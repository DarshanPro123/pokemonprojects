import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-sec">
        <h1>
          About <span>Pokemon</span>
        </h1>
      </div>
      <div className="about_container">
        <div className="imgcontaier">
          <img src="src/assets/zambo.png" alt="" />
        </div>

        <div className="about-content">
          <p>
            The Pokémon Company International (TPCi) has a mission to delight
            our fans through excellent products and meaningful experiences. We
            hope to help make the world a better place for everyone by creating
            opportunities to bond and grow through shared journeys and friendly
            competition.
          </p>

          <button>
            {" "}
            <a href="/dashboard">Learn More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
