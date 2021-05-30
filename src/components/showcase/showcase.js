import React from "react";
import "./showcase.scss";
import pets from "./pet-projects.json";
import articles from "./articles.json";
import Pet from "./pet";

const Showcase = () => {
  return (
    <div className="showcase-container">
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <div className="showcase">
        <h1 className="glitch" data-text="Showcase">
          Showcase
        </h1>

        <div className="pet-projects">
          <h4>Open-source projects</h4>
          <ul className="pet-list">
            {pets.map((props) => (
              <li className="pet-item" key={props.title}>
                <Pet {...props} />
              </li>
            ))}
          </ul>
        </div>

        <div className="pet-projects">
          <h4>Articles</h4>
          <ul className="pet-list">
            {articles.map((props) => (
              <li className="pet-item" key={props.title}>
                <Pet {...props} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
