import React from "react";
import { Link } from "react-router-dom";
export default function Social() {
  return (
    <div>
      <section className="section">
        <h2>Word of the Day Series</h2>
        <div className="grid">
          <div className="post-card">
            <div className="post-img">KENAVO — Goodbye</div>
            <div style={{ marginTop: 10 }}>
              <div className="kv">
                Caption: "Kenavo — a friendly Breton goodbye. Say it, share it,
                and tag someone you want to see again. #LearnBreton #Kenavo"
              </div>
              <Link to="/" className="cta">
                Try Today's Word
              </Link>
            </div>
          </div>

          <div className="post-card">
            <div className="post-img">DEMAT — Hello</div>
            <div style={{ marginTop: 10 }}>
              <div className="kv">
                Caption: "Demat! Start conversations in Breton. New speakers
                welcome. #Demat #BretonRevival"
              </div>
              <Link to="/" className="cta">
                Learn Greetings
              </Link>
            </div>
          </div>

          <div className="post-card">
            <div className="post-img">FESTIVAL — Music</div>
            <div style={{ marginTop: 10 }}>
              <div className="kv">
                Caption: "Music translates. Join our Breton Music Festival to
                sing and learn. #BretonMusic #LanguageFestival"
              </div>
              <Link to="/events" className="cta">
                Festival Info
              </Link>
            </div>
          </div>

          <div className="post-card">
            <div className="post-img">NESTS — Early learning</div>
            <div style={{ marginTop: 10 }}>
              <div className="kv">
                Caption: "Language nests help children acquire Breton naturally.
                Donate or volunteer. #LanguageNests"
              </div>
              <Link to="/community" className="cta">
                Support Nests
              </Link>
            </div>
          </div>

          <div className="post-card">
            <div className="post-img">APRENTICE — Mentors</div>
            <div style={{ marginTop: 10 }}>
              <div className="kv">
                Caption: "Become a mentor: pass on stories, songs, and practical
                language. #MentorBreton"
              </div>
              <Link to="/signup" className="cta">
                Become a Mentor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section card">
        <h2>Post Guidance</h2>
        <p className="kv">
          Each post should include: a bold image, 1–2 lines of caption, one
          clear CTA, and hashtags: #BretonRevival #LearnBreton #BretonMusic
          #LanguageNests
        </p>
      </section>

      <section className="section">
        <h2>Share Your Posts</h2>
        <p className="kv">
          Upload your own social media posts to inspire the community.
        </p>

        <div className="upload-section card">
          <h3>Upload Social Post</h3>
          <form className="upload-form">
            <div className="form-field">
              <input
                type="text"
                id="post-title"
                className="input"
                placeholder="Post caption or title"
                required
              />
            </div>
            <div className="form-field">
              <input
                type="file"
                id="post-file"
                className="input file-input"
                accept="image/*"
                required
              />
              <label htmlFor="post-file" className="file-label">
                Choose image
              </label>
            </div>
            <button type="submit" className="cta">
              Upload Post
            </button>
          </form>
          <p className="kv" style={{ marginTop: 16, fontSize: "0.85rem" }}>
            Note: This is a prototype. In production, uploads would be sent to a
            server.
          </p>
        </div>
      </section>
    </div>
  );
}
