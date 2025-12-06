import React from "react";
import { Link } from "react-router-dom";
export default function Apprentice() {
  return (
    <div>
      <section className="section card">
        <h2>Master–Apprentice Program</h2>
        <p className="kv">
          A practical immersion model: learners spend 4–8 hours weekly with a
          fluent speaker doing daily tasks, storytelling, and cultural
          activities in Breton.
        </p>
      </section>

      <section className="section card">
        <h2>How to apply</h2>
        <ol className="kv">
          <li>Register interest on the form</li>
          <li>Attend an orientation meeting</li>
          <li>Get paired and start weekly sessions</li>
        </ol>
        <Link to="/signup" className="cta">
          Register Interest
        </Link>
      </section>
    </div>
  );
}
