import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("learner");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function validate() {
    const e = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Please enter a valid email.";
    return e;
  }

  function submit(e) {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length === 0) {
      // For now just navigate to thanks; real implementation would POST to server
      navigate("/thanks");
    }
  }

  return (
    <div>
      <section className="section card">
        <h2>Sign Up</h2>
        <p className="kv">
          Sign up to be a mentor, join a trip, or register for events.
        </p>

        <form className="signup-form" onSubmit={submit} noValidate>
          <div className="form-field">
            <input
              id="name"
              className="input"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              required
            />
            <label htmlFor="name">Full name</label>
            {errors.name && (
              <small id="name-error" className="field-error">
                {errors.name}
              </small>
            )}
          </div>

          <div className="form-field">
            <input
              id="email"
              type="email"
              className="input"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            <label htmlFor="email">Email address</label>
            {errors.email && (
              <small id="email-error" className="field-error">
                {errors.email}
              </small>
            )}
          </div>

          <div className="form-field">
            <select
              id="role"
              className="input select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              aria-label="I am a"
            >
              <option value="learner">Learner</option>
              <option value="mentor">Mentor / Fluent speaker</option>
              <option value="volunteer">Volunteer</option>
            </select>
            <label htmlFor="role">I am a</label>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
            <button className="cta" type="submit">
              Join us
            </button>
            <button
              type="button"
              className="btn ghost"
              onClick={() => {
                setName("");
                setEmail("");
                setRole("learner");
                setErrors({});
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
