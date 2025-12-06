import React from "react";
import { Link } from "react-router-dom";
export default function Events() {
  return (
    <div>
      <section className="section card">
        <h2>Upcoming Events</h2>
        <div className="grid" style={{ marginTop: 12 }}>
          <div className="card">
            <h3>Breton Music & Song Festival</h3>
            <p className="kv">
              Weekend festival with concerts, céilidhs, and youth showcases.
            </p>
            <p className="kv">When: July 18–20</p>
            <a className="cta" href="#">
              Get Tickets
            </a>
          </div>

          <div className="card">
            <h3>Cooking & Language Workshops</h3>
            <p className="kv">
              Hands-on classes that mix recipes, vocabulary, and stories.
            </p>
            <p className="kv">When: Monthly — next: June 8</p>
            <Link to="/signup" className="cta">
              Join a Class
            </Link>
          </div>

          <div className="card">
            <h3>Immersion Week: Coastal Villages</h3>
            <p className="kv">
              Five-day small-group immersion in Breton-speaking villages.
            </p>
            <p className="kv">When: August 3–8</p>
            <Link to="/signup" className="cta">
              Apply
            </Link>
          </div>

          <div className="card">
            <h3>Young Voices Competition</h3>
            <p className="kv">
              Song and spoken-word competition for learners and youth.
            </p>
            <p className="kv">Prizes and mentorships available.</p>
            <a className="cta" href="#">
              Enter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
