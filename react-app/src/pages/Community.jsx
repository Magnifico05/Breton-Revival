import React from "react";
import { Link } from "react-router-dom";
export default function Community() {
  return (
    <div>
      <section className="section card">
        <h2>Get Involved</h2>
        <p className="kv">
          Volunteer to host conversation circles, teach a class, or mentor a
          learner. We provide materials and training for beginners.
        </p>
        <Link to="/signup" className="cta">
          Apply to Mentor
        </Link>
      </section>

      <section className="section card">
        <h2>Language Nests</h2>
        <p className="kv">
          Language Nests are immersive learning environments where children and
          learners are surrounded by fluent Breton speakers in a supportive,
          play-based setting. Unlike traditional classrooms, nests prioritize
          natural language acquisition through conversation, games, songs, and
          cultural activities.
        </p>
        <h3 style={{ marginTop: 20, marginBottom: 12 }}>
          Why Join a Language Nest?
        </h3>
        <ul className="kv">
          <li>
            <strong>Immersive Learning:</strong> Constant exposure to spoken
            Breton helps you absorb the language naturally
          </li>
          <li>
            <strong>Community Connection:</strong> Meet other learners and
            fluent speakers in a welcoming environment
          </li>
          <li>
            <strong>Cultural Integration:</strong> Learn traditions, songs, and
            stories alongside the language
          </li>
          <li>
            <strong>All Ages Welcome:</strong> Programs available for children,
            adults, and families
          </li>
          <li>
            <strong>Proven Success:</strong> Language nests have been
            instrumental in revitalizing endangered languages worldwide
          </li>
        </ul>
        <Link to="/signup" className="cta">
          Find a Language Nest
        </Link>
      </section>

      <section className="section card">
        <h2>Master-Apprentice Program</h2>
        <p className="kv">
          The Master-Apprentice Program pairs fluent Breton speakers (Masters)
          with dedicated learners (Apprentices) for one-on-one immersion
          sessions. Through weekly conversations, shared activities, and
          cultural exchanges, apprentices gain practical language skills while
          building meaningful friendships.
        </p>
        <h3 style={{ marginTop: 20, marginBottom: 12 }}>
          Why Join the Master-Apprentice Program?
        </h3>
        <ul className="kv">
          <li>
            <strong>Personalized Learning:</strong> One-on-one instruction
            tailored to your pace and learning style
          </li>
          <li>
            <strong>Authentic Conversation:</strong> Real-world dialogue with
            native speakers in natural settings
          </li>
          <li>
            <strong>Cultural Mentorship:</strong> Learn traditions, customs, and
            local insights directly from fluent speakers
          </li>
          <li>
            <strong>Flexible Schedule:</strong> Weekly meetings arranged around
            your availability
          </li>
          <li>
            <strong>Language Immersion:</strong> Intensive practice designed to
            accelerate your fluency
          </li>
        </ul>
        <Link to="/signup" className="cta">
          Join the Program
        </Link>
      </section>

      <section className="section card">
        <h2>Resources & Tools</h2>
        <p className="kv">
          We've created practical resources to help you build and strengthen
          Breton language communities wherever you are.
        </p>
        <div
          style={{
            marginTop: 24,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          <div
            style={{
              padding: "20px",
              background: "rgba(59, 130, 246, 0.1)",
              borderRadius: "12px",
              border: "1px solid rgba(59, 130, 246, 0.2)",
            }}
          >
            <h4
              style={{
                marginTop: 0,
                marginBottom: 12,
                color: "var(--accent-primary)",
              }}
            >
              📦 Starter Packs
            </h4>
            <p className="kv" style={{ fontSize: "0.95rem" }}>
              Ready-to-use materials for launching conversation circles,
              language groups, or study clubs in your community.
            </p>
          </div>
          <div
            style={{
              padding: "20px",
              background: "rgba(251, 191, 36, 0.1)",
              borderRadius: "12px",
              border: "1px solid rgba(251, 191, 36, 0.2)",
            }}
          >
            <h4
              style={{
                marginTop: 0,
                marginBottom: 12,
                color: "var(--accent-gold)",
              }}
            >
              🍳 Lesson Templates
            </h4>
            <p className="kv" style={{ fontSize: "0.95rem" }}>
              Structured guides for hosting cooking classes, song sessions, and
              cultural workshops in Breton.
            </p>
          </div>
          <div
            style={{
              padding: "20px",
              background: "rgba(96, 165, 250, 0.1)",
              borderRadius: "12px",
              border: "1px solid rgba(96, 165, 250, 0.2)",
            }}
          >
            <h4
              style={{
                marginTop: 0,
                marginBottom: 12,
                color: "var(--accent-secondary)",
              }}
            >
              🎪 Outreach Toolkits
            </h4>
            <p className="kv" style={{ fontSize: "0.95rem" }}>
              Promotional materials and activity ideas for local festivals,
              fairs, and community events.
            </p>
          </div>
        </div>
        <Link to="/learn" className="cta" style={{ marginTop: 24 }}>
          Download Resources
        </Link>
      </section>
    </div>
  );
}
