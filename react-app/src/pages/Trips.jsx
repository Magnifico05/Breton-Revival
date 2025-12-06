import React from "react";
import { Link } from "react-router-dom";
export default function Trips() {
  return (
    <div>
      <section className="section card">
        <h2>Day Trips</h2>
        <p className="kv">
          Practice Breton with locals on guided visits and overnight trips.
        </p>
        <div className="grid" style={{ marginTop: 12 }}>
          <div className="card">
            <h3>Coastal Walks</h3>
            <p className="kv">
              Guided coastal walks with natural conversation practice.
            </p>
          </div>
          <div className="card">
            <h3>Village Visits</h3>
            <p className="kv">Meet local speakers and storytellers.</p>
          </div>
          <div className="card">
            <h3>Evening Story Nights</h3>
            <p className="kv">Tavern storytelling and song sessions.</p>
          </div>
        </div>
        <Link to="/signup" className="cta" style={{ marginTop: 12 }}>
          Join a Trip
        </Link>
      </section>
    </div>
  );
}
