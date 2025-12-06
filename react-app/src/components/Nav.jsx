import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo" aria-hidden>
          BR
        </div>
        <div className="brand-name">Breton Revival</div>
      </div>
      <nav className="nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/learn">Learn</NavLink>
        <NavLink to="/culture">Culture</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/myth">Mythology</NavLink>
        <NavLink to="/social">Social</NavLink>
        <NavLink to="/community">Community</NavLink>
        <NavLink to="/posters">Posters</NavLink>
        <NavLink to="/references">References</NavLink>
      </nav>
    </header>
  );
}
