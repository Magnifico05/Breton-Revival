import React from "react";
import { Link } from "react-router-dom";
export default function Thanks() {
  return (
    <div>
      <section className="section card">
        <h2>Thank you!</h2>
        <p className="kv">
          Thanks for signing up — we'll be in touch by email.
        </p>
        <Link to="/" className="cta">
          Back to Home
        </Link>
      </section>
    </div>
  );
}
