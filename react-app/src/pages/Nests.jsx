import React from "react";
import { Link } from "react-router-dom";
export default function Nests() {
  return (
    <div>
      <section className="section card">
        <h2>Language Nests</h2>
        <p className="kv">
          Preschool settings where Breton is the language of daily life — songs,
          play, and care in Breton. The goal is natural language acquisition in
          early years.
        </p>
      </section>

      <section className="section card">
        <h2>Parent support</h2>
        <p className="kv">
          Workshops to help families keep Breton at home, and resources for
          daily practice.
        </p>
        <Link to="/community" className="cta">
          Support Nests
        </Link>
      </section>
    </div>
  );
}
