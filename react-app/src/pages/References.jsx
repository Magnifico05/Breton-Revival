import React from "react";

const REFERENCES = [
  {
    category: "Culture & History",
    links: [
      {
        title: "Brittany Tourism Board",
        url: "https://www.brittanytourism.com/",
      },
      {
        title: "Wikipedia: Breton Language",
        url: "https://en.wikipedia.org/wiki/Breton_language",
      },
      {
        title: "Wikipedia: Brittany",
        url: "https://en.wikipedia.org/wiki/Brittany",
      },
      {
        title: "Barzaz Breiz (Folk Ballads)",
        url: "https://en.wikipedia.org/wiki/Barzaz_Breiz",
      },
      {
        title: "Breton Mythology",
        url: "https://en.wikipedia.org/wiki/Breton_mythology",
      },
      {
        title: "Ankou",
        url: "https://en.wikipedia.org/wiki/Ankou",
      },
      {
        title: "Melusine",
        url: "https://en.wikipedia.org/wiki/Melusine",
      },
      {
        title: "Korrigans",
        url: "https://en.wikipedia.org/wiki/Korrigan",
      },
      {
        title: "Ys (Legendary City)",
        url: "https://en.wikipedia.org/wiki/Ys",
      },
    ],
  },
  {
    category: "Music & Arts",
    links: [
      {
        title: "Festival Cornouaille",
        url: "https://www.festival-cornouaille.bzh/",
      },
    ],
  },
  {
    category: "Organizations & Resources",
    links: [
      {
        title: "ICDBL (International Celtic Digital Library)",
        url: "https://icdbl.org/",
      },
      {
        title: "UNESCO: Breton Intangible Heritage",
        url: "https://ich.unesco.org/",
      },
    ],
  },
];

export default function References() {
  return (
    <div>
      <section className="section">
        <h2>References & Resources</h2>
        <p className="kv">
          A curated collection of links to learn more about the Breton language,
          culture, and heritage.
        </p>
      </section>

      {REFERENCES.map((section, idx) => (
        <section key={idx} className="section">
          <h3>{section.category}</h3>
          <div className="reference-grid">
            {section.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reference-link"
              >
                <span className="ref-title">{link.title}</span>
                <span className="ref-icon">↗</span>
              </a>
            ))}
          </div>
        </section>
      ))}

      <section className="section card">
        <h3>Contribute a Reference</h3>
        <p className="kv">
          Know a great resource? Let us know via our community form.
        </p>
      </section>
    </div>
  );
}
