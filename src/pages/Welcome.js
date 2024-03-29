import React from "react";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <button className="dresseur">
          Un jour je serais le meilleur dresseur...
        </button>
      </NavLink>
    </div>
  );
};

export default Welcome;
