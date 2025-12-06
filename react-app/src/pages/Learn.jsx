import React from "react";
import { Link } from "react-router-dom";
export default function Learn() {
  const documents = [
    {
      title: "Breton phonetics using IPA",
      description:
        "Complete guide to fundamental grammar structures, verb conjugations, and sentence patterns.",
      icon: "📄",
      url: "\\docs\\Activity 3[1].pdf",
      filename: "Breton_Phonetics_IPA.pdf",
    },
    {
      title: "Breton Alphabet & Writing System",
      description:
        "Curated list of essential words, phrases, and idioms for everyday conversation.",
      icon: "📚",
      url: "\\docs\\Breton Activity 1[1].pdf",
      filename: "Breton_Alphabet_Writing.pdf",
    },
    {
      title: "Breton Simple Vocabulary & Grammar",
      description:
        "Audio-friendly guide with IPA notation and phonetic tips for learners.",
      icon: "🔊",
      url: "\\docs\\Breton Activity 2[1].pdf",
      filename: "Breton_Vocabulary_Grammar.pdf",
    },
  ];

  return (
    <div>
      <section className="section card">
        <h2>Best Places to Learn</h2>
        <div className="grid" style={{ marginTop: 12 }}>
          <div className="card">
            <h3>Roudour Language Institute</h3>
            <p className="kv">
              Immersion classes, friendly teachers, and evening conversation
              circles.
            </p>
          </div>
          <div className="card">
            <h3>Skol an Emsav</h3>
            <p className="kv">
              Structured courses with certified instructors and cultural
              modules.
            </p>
          </div>
          <div className="card">
            <h3>Online Breton Academy</h3>
            <p className="kv">
              Flexible, self-paced online lessons and weekly live sessions.
            </p>
          </div>
        </div>
      </section>

      <section className="section card">
        <h2>Learning Paths</h2>
        <ol className="kv">
          <li>Beginner: 8-week phrase and song course</li>
          <li>Intermediate: conversation & storywork</li>
          <li>Advanced: master‑apprentice pairing & public speaking</li>
        </ol>
        <Link to="/signup" className="cta">
          Sign up for courses
        </Link>
      </section>

      <section className="section">
        <h2>Learning Resources</h2>
        <p className="kv">
          Download guides and resources to support your learning journey.
        </p>
        <div className="docs-grid">
          {documents.map((doc, i) => (
            <div key={i} className="doc-card">
              <div className="doc-icon">{doc.icon}</div>
              <h3>{doc.title}</h3>
              <p className="kv">{doc.description}</p>
              <div className="doc-actions">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-doc view"
                >
                  👁️ View
                </a>
                <a
                  href={doc.url}
                  download={doc.filename}
                  className="btn-doc download"
                >
                  📥 Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
