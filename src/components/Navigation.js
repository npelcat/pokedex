import React from "react";
import { NavLink } from "react-router-dom";

const navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>
            <img
              className="pokeball"
              src="./pokeball-icon.png"
              alt="pokeball icon"
            />
          </li>
        </NavLink>
        <NavLink
          to="/pokedex"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>à propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default navigation;
