import React, { useState } from "react";

export default function StoryCard({ title, excerpt, full }) {
  const [open, setOpen] = useState(false);

  // Split text into paragraphs by double newlines
  const paragraphs = full.split("\n\n").filter((p) => p.trim().length > 0);

  return (
    <div
      className={`post-card ${open ? "open" : ""}`}
      tabIndex={0}
      onClick={() => setOpen(!open)}
      onKeyDown={(e) => {
        if (e.key === "Enter") setOpen(!open);
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 8 }}>{title}</div>
      <div className="kv">{excerpt}</div>
      {open && (
        <div style={{ marginTop: 16 }} className="story-full-text">
          {paragraphs.map((para, idx) => (
            <p key={idx} className="kv" style={{ marginBottom: 16 }}>
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
