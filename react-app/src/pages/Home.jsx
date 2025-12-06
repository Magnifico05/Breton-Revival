import React, { useState } from "react";
import WOD from "../components/WOD";
import { Link } from "react-router-dom";

export default function Home() {
  const [showEndangered, setShowEndangered] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div>
      <section className="hero">
        <div className="hero-card">
          <h1>Discover Breton</h1>
          <p>
            A living Celtic language reborn through community, culture, and
            creativity.
          </p>

          <div style={{ marginTop: 20 }}>
            <WOD />
          </div>
        </div>

        <div className="hero-visual"></div>
      </section>

      <section className="section">
        <h2>Featured Pages</h2>
        <div className="grid">
          <div className="card">
            <h3>Learn Breton</h3>
            <p>
              Explore classes, language nests, apps, and master-apprentice
              programs.
            </p>
            <Link to="/signup" className="cta">
              Explore
            </Link>
          </div>

          <div className="card">
            <h3>Events & Workshops</h3>
            <p>Cooking classes, retreats, conversation cafes, and more.</p>
            <Link to="/events" className="cta">
              View Events
            </Link>
          </div>

          <div className="card">
            <h3>Cultural Day Trips</h3>
            <p>
              Visit Breton-speaking towns, meet locals, and practice naturally.
            </p>
            <Link to="/culture" className="cta">
              Discover
            </Link>
          </div>

          <div className="card">
            <h3>Community Hub</h3>
            <p>
              Find groups, volunteer opportunities, and intergenerational
              projects.
            </p>
            <Link to="/community" className="cta">
              Join Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Why Breton Is Endangered</h2>
        <div className="card kv">
          <p style={{ margin: 0 }}>
            Breton has become a severely endangered language after decades of
            repression by the French educational system. Although around 500,000
            people are estimated to know the language, most fluent speakers are
            over 60...
          </p>

          {showEndangered && (
            <p className="expandable-content">
              ...and the number of active users is likely far lowerPress (1986)
              estimated only 50,000100,000, a figure that has probably declined
              since. For many years, the French state actively discouraged
              Breton, even banning Breton names for children until 1993.
              Official attitudes reflected this hostility: in the 1800s and
              early 1900s, government figures referred to Breton as something to
              be "killed" or as a "barbarous relic," and in 1972 President
              Pompidou declared that regional languages had no place in France.
              Despite the collapse in intergenerational transmission, a revival
              is underway. New younger speakers are emerging from Diwan
              bilingual schools, founded in the 1970s. Their Breton differs from
              that of older generationsshowing phonological influence from
              French but also avoiding many French loanwords found in
              traditional speech.
            </p>
          )}

          <button
            onClick={() => setShowEndangered(!showEndangered)}
            className="btn-expand"
          >
            {showEndangered ? "Show Less ↑" : "Show More ↓"}
          </button>
        </div>
      </section>

      <section className="section">
        <h2>History & Culture</h2>
        <div className="grid">
          <div className="card">
            <h3>A Rich Past</h3>
            <p className="kv" style={{ margin: 0 }}>
              Breton (Brezhoneg) is a Celtic language with a history deeply
              intertwined with the cultural and political evolution of Brittany.
              Its origins trace back to the early Middle Ages, when
              Celtic-speaking migrants from Britain settled in
              Armoricamodern-day Brittanybetween the 4th and 6th centuries...
            </p>

            {showHistory && (
              <p className="kv expandable-content">
                These migrations gave rise to a new cultural landscape in
                western France, where Breton developed alongside Welsh and
                Cornish as part of the Brythonic branch of Celtic languages.
                Throughout the Middle Ages, Breton flourished as a language of
                everyday life, oral tradition, and early literature. It was the
                medium of folk tales, heroic legends, and religious poetry,
                forming a vibrant cultural heritage that still shapes Breton
                identity today. The Barzaz Breiz (1839), a celebrated collection
                of traditional songs, helped preserve this rich oral culture and
                remains one of the most influential works in Celtic studies.
                Breton also held an important place in the political life of the
                region. During the era of the independent Duchy of Brittany
                (9th15th centuries), it served as the language of the common
                people while coexisting with Latin and later French in
                administration and literature. Even after Brittany was united
                with France in 1532, Breton continued to be spoken widely across
                the region and maintained a strong rural presence for centuries.
                Its cultural depth is evident in its distinct dialects, medieval
                poetry, traditional music, and the survival of pre-Christian
                elements in local customs. Breton toponyms, festivals, and
                folklore offer a window into a long history shaped by Celtic
                roots, maritime life, and regional autonomy. Today, despite its
                endangered status, Breton's past remains a source of pride and
                cultural revival. Its literature, legends, and centuries-old
                traditions continue to inspire contemporary efforts to preserve
                and celebrate the language.
              </p>
            )}

            <button
              onClick={() => setShowHistory(!showHistory)}
              className="btn-expand"
            >
              {showHistory ? "Show Less ↑" : "Show More ↓"}
            </button>
          </div>

          <div className="card">
            <h3>Mythology & Folklore</h3>
            <p className="kv">
              From legendary sea-spirits to local saints, Breton mythology is
              alive in festivals, music, and place-names a core part of the
              language revival story.
            </p>
            <Link to="/myth" className="cta">
              Explore Myth & Music
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Campaign Events (Highlights)</h2>
        <div className="grid">
          <div className="card">
            <h3>MasterApprentice Signup Drive</h3>
            <p className="kv">
              Pair with a fluent speaker for weekly immersion.
            </p>
            <Link to="/signup" className="cta">
              Sign Up
            </Link>
          </div>

          <div className="card">
            <h3>Breton Music & Song Festival</h3>
            <p className="kv">
              A weekend of concerts, workshops, and youth showcases.
            </p>
            <Link to="/events" className="cta">
              Details & Tickets
            </Link>
          </div>

          <div className="card">
            <h3>Word-of-the-Day Social Campaign</h3>
            <p className="kv">
              Daily posts and short videos to boost familiarity.
            </p>
            <Link to="/social" className="cta">
              See Posts
            </Link>
          </div>

          <div className="card">
            <h3>Immersion Week Trips</h3>
            <p className="kv">
              Small-group trips to Breton-speaking communities.
            </p>
            <Link to="/signup" className="cta">
              Join a Trip
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
