import React from "react";

export default function PosterMusic() {
  return (
    <div
      style={{
        maxWidth: "800px",
        aspectRatio: "8.5/11",
        background:
          "linear-gradient(135deg, #0a1628 0%, #1a2942 50%, #0f1d2e 100%)",
        color: "#f8fafc",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: '"Sora", sans-serif',
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "250px",
          height: "250px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-80px",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          overflowY: "auto",
          maxHeight: "100%",
        }}
      >
        {/* Music emojis at top */}
        <div
          style={{
            fontSize: "1.8rem",
            margin: "0 0 12px",
            letterSpacing: "8px",
          }}
        >
          🎵 🎸 🎵
        </div>

        {/* Main title */}
        <h1
          style={{
            fontSize: "2.4rem",
            fontWeight: 700,
            margin: "8px 0 6px",
            background: "linear-gradient(135deg, #60a5fa 0%, #fbbf24 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Breton Music &
        </h1>
        <h1
          style={{
            fontSize: "2.4rem",
            fontWeight: 700,
            margin: "0 0 12px",
            background: "linear-gradient(135deg, #60a5fa 0%, #fbbf24 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Song Festival
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: 500,
            margin: "10px 0 12px",
            color: "#fbbf24",
          }}
        >
          🎵 Celebrate Celtic Heritage 🎵
        </p>

        {/* Date and location */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(59, 130, 246, 0.15))",
            border: "2px solid rgba(251, 191, 36, 0.4)",
            borderRadius: "10px",
            padding: "12px 16px",
            margin: "12px 0",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              margin: "6px 0",
              color: "#fbbf24",
            }}
          >
            📅 July 18–20
          </p>
          <p style={{ fontSize: "0.95rem", margin: "4px 0", color: "#a8b8cf" }}>
            📍 Local Halls & Coastal Venues
          </p>
        </div>

        {/* Feature boxes grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            margin: "12px 0",
          }}
        >
          {[
            { emoji: "🎤", label: "Live Music", color: "#3b82f6" },
            { emoji: "💃", label: "Dancing", color: "#ec4899" },
            { emoji: "🎓", label: "Workshops", color: "#10b981" },
            { emoji: "🌟", label: "Community", color: "#f59e0b" },
          ].map((feature, idx) => (
            <div
              key={idx}
              style={{
                background: `rgba(${
                  feature.color === "#3b82f6"
                    ? "59, 130, 246"
                    : feature.color === "#ec4899"
                    ? "236, 72, 153"
                    : feature.color === "#10b981"
                    ? "16, 185, 129"
                    : "245, 158, 11"
                }, 0.15)`,
                border: `2px solid ${feature.color}`,
                borderRadius: "8px",
                padding: "8px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.5rem", margin: "4px 0" }}>
                {feature.emoji}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: feature.color,
                  fontWeight: 600,
                }}
              >
                {feature.label}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.4",
            margin: "12px 0",
            color: "#e0e7ff",
          }}
        >
          Sing • Dance • Learn
          <br />
          <span style={{ color: "#60a5fa", fontSize: "0.95rem" }}>
            Concerts • Workshops • Youth Showcases
          </span>
        </p>

        {/* Call to action */}
        <div
          style={{
            background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
            padding: "12px 28px",
            borderRadius: "10px",
            margin: "12px 0",
            display: "inline-block",
            border: "2px solid rgba(251, 191, 36, 0.5)",
          }}
        >
          <p style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>
            🎟️ REGISTER NOW
          </p>
        </div>

        {/* Website */}
        <p
          style={{
            fontSize: "0.85rem",
            margin: "8px 0 0",
            color: "#a8b8cf",
            fontStyle: "italic",
          }}
        >
          bretonrevival.example
        </p>
      </div>
    </div>
  );
}
