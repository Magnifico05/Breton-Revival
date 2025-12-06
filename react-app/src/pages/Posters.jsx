import React from "react";
import { Link } from "react-router-dom";

export default function Posters() {
  return (
    <div>
      <section className="section">
        <h2>Official Campaign Posters</h2>
        <p className="kv">
          Download and share these posters to promote Breton language events and
          initiatives in your community.
        </p>
      </section>

      <section className="section">
        <h2>Poster: Breton Music & Song Festival</h2>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
            border: "1px solid rgba(59, 130, 246, 0.2)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/posters/festival.jpg"
            alt="Breton Music Festival Poster"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              border: "none",
              borderRadius: "8px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/posters/Music_Festival_Poster.html"
            download="Breton_Music_Festival_Poster.html"
            className="btn-doc download"
          >
            📥 Download HTML
          </a>
          <button onClick={() => window.print()} className="btn-doc view">
            🖨️ Print
          </button>
        </div>
      </section>

      <section className="section">
        <h2>Poster: Word-of-the-Day Campaign</h2>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
            border: "1px solid rgba(251, 191, 36, 0.2)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            src="/posters/word_of_day_kalon.png"
            title="Word of the Day Poster"
            style={{
              width: "100%",
              maxWidth: "600px",
              aspectRatio: "8.5/11",
              border: "none",
              borderRadius: "8px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/posters/WordOfDay_Poster.html"
            download="Breton_WordOfDay_Poster.html"
            className="btn-doc download"
          >
            📥 Download HTML
          </a>
          <button onClick={() => window.print()} className="btn-doc view">
            🖨️ Print
          </button>
        </div>
      </section>

      <section className="section">
        <h2>Community Posters</h2>
        <p className="kv">
          Upload and share your own Breton Revival posters with the community.
        </p>

        {/* Display your uploaded poster here */}
        <div className="poster-gallery">
          <div className="poster-item">
            <iframe
              src="/posters/Breton Project[1].pdf"
              title="Breton Revival Poster"
              className="poster-pdf"
            />
            <div
              style={{
                marginTop: 12,
                display: "flex",
                gap: 12,
                justifyContent: "center",
              }}
            >
              <a
                href="/posters/Breton Project[1].pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-doc view"
              >
                👁️ View Full Size
              </a>
              <a
                href="/posters/Breton Project[1].pdf"
                download="Breton_Revival_Poster.pdf"
                className="btn-doc download"
              >
                📥 Download
              </a>
            </div>
          </div>
        </div>

        <div className="upload-section card">
          <h3>Upload Your Poster</h3>
          <form className="upload-form">
            <div className="form-field">
              <input
                type="text"
                id="poster-title"
                className="input"
                placeholder="Poster title"
                required
              />
            </div>
            <div className="form-field">
              <input
                type="file"
                id="poster-file"
                className="input file-input"
                accept="image/*,.pdf"
                required
              />
              <label htmlFor="poster-file" className="file-label">
                Choose image or PDF
              </label>
            </div>
            <button type="submit" className="cta">
              Upload Poster
            </button>
          </form>
          <p className="kv" style={{ marginTop: 16, fontSize: "0.85rem" }}>
            Note: This is a prototype. In production, uploads would be sent to a
            server.
          </p>
        </div>
      </section>

      <section className="section card" style={{ marginTop: 12 }}>
        <Link to="/" className="cta">
          Back to Home
        </Link>
      </section>
    </div>
  );
}
