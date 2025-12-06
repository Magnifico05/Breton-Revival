import React from "react";
import { Link } from "react-router-dom";
export default function Culture() {
  return (
    <div>
      <section className="section card">
        <h2>History & Language Roots</h2>
        <p className="kv">
          Breton grew from the speech of Celtic communities in western Britain
          who crossed the Channel in late antiquity. Their tongue belonged to
          the Brittonic subgroup of Celtic, carrying with it the phonology and
          grammatical patterns shared with early Welsh and Cornish. As these
          settlers established themselves in Armorica, their language mixed
          lightly with the local Latin of the region but kept its core Celtic
          structure—marked by initial consonant mutations, flexible word order,
          and a deep reliance on prefixing and inflection. Over centuries,
          Breton developed its own regional varieties, shaped more by geography
          than by outside influence. The language maintained a strong Brittonic
          backbone: similar verb forms, shared vocabulary with Welsh and
          Cornish, and an oral tradition rooted in rhythmic, alliterative
          phrasing typical of Celtic languages. Even as French became dominant,
          Breton held onto these ancient linguistic frameworks, preserving one
          of the last living traces of continental Celtic speech.
        </p>
      </section>

      <section className="section card">
        <h2>Major Cultural Aspects</h2>
        <ul className="kv">
          <li>Breton music: festoù-noz, gwerz, and kan ha diskan</li>
          <li>Traditional dance and communal gatherings</li>
          <li>Crafts, stories, and place-based oral histories</li>
          <li>
            Distinct Celtic mythology and legendary cycles tied to Armorican
            landscapes
          </li>
          <li>
            Strong maritime identity shaped by fishing, sailing, and coastal
            lifeways
          </li>
          <li>
            Regional costumes, embroidery, and symbolic motifs (triskels,
            hermines)
          </li>
          <li>
            Seasonal festivals honoring local saints, rituals, and rural
            traditions
          </li>
          <li>
            A deep literary heritage spanning medieval poetry to modern Breton
            writing
          </li>
        </ul>
      </section>

      <section className="section card">
        <h2>Myth & Story Nights</h2>
        <p className="kv">
          Legends combine with everyday life; story nights and recordings keep
          them alive.
        </p>
        <Link to="/myth" className="cta">
          See Stories
        </Link>
      </section>
    </div>
  );
}
