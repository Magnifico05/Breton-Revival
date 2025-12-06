import React from "react";

export default function PosterWOD() {
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
          right: "-80px",
          width: "250px",
          height: "250px",
          background:
            "radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-80px",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
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
        {/* Decorative top element */}
        <div
          style={{
            fontSize: "1.6rem",
            margin: "0 0 10px",
            letterSpacing: "6px",
          }}
        >
          📚 🗣️ 📚
        </div>

        {/* Main title */}
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: 700,
            margin: "8px 0 8px",
            background: "linear-gradient(135deg, #fbbf24 0%, #60a5fa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Word of the Day
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: 500,
            margin: "8px 0 10px",
            color: "#60a5fa",
          }}
        >
          Learn. Share. Revive.
        </p>

        {/* Main message box */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(16, 185, 129, 0.1))",
            border: "2px solid rgba(251, 191, 36, 0.4)",
            borderRadius: "12px",
            padding: "12px 16px",
            margin: "10px 0",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.5",
              margin: "0",
              color: "#e0e7ff",
            }}
          >
            Every day, explore{" "}
            <span style={{ color: "#fbbf24", fontWeight: 600 }}>
              one new Breton word
            </span>
          </p>
          <p
            style={{ fontSize: "0.9rem", margin: "8px 0 0", color: "#a8b8cf" }}
          >
            Record it • Share it • Teach it
          </p>
        </div>

        {/* Impact message */}
        <p
          style={{
            fontSize: "1.05rem",
            fontWeight: 600,
            margin: "10px 0",
            color: "#fbbf24",
          }}
        >
          Small Steps. Big Impact. 🌟
        </p>

        {/* Feature boxes grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "6px",
            margin: "10px 0",
            fontSize: "0.8rem",
          }}
        >
          {[
            { emoji: "📱", label: "Mobile", color: "#3b82f6" },
            { emoji: "🌍", label: "Global", color: "#ec4899" },
            { emoji: "⏰", label: "Daily", color: "#10b981" },
          ].map((feature, idx) => (
            <div
              key={idx}
              style={{
                background: `rgba(${
                  feature.color === "#3b82f6"
                    ? "59, 130, 246"
                    : feature.color === "#ec4899"
                    ? "236, 72, 153"
                    : "16, 185, 129"
                }, 0.15)`,
                border: `2px solid ${feature.color}`,
                borderRadius: "8px",
                padding: "6px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.3rem", margin: "2px 0" }}>
                {feature.emoji}
              </div>
              <div style={{ color: feature.color, fontWeight: 600 }}>
                {feature.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional feature boxes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6px",
            margin: "10px 0",
          }}
        >
          {[
            { emoji: "🎤", label: "Speak Breton", color: "#f59e0b" },
            { emoji: "💬", label: "Community", color: "#8b5cf6" },
          ].map((feature, idx) => (
            <div
              key={idx}
              style={{
                background: `rgba(${
                  feature.color === "#f59e0b" ? "245, 158, 11" : "139, 92, 246"
                }, 0.15)`,
                border: `2px solid ${feature.color}`,
                borderRadius: "8px",
                padding: "8px",
                textAlign: "center",
                fontSize: "0.85rem",
              }}
            >
              <div style={{ fontSize: "1.4rem", margin: "3px 0" }}>
                {feature.emoji}
              </div>
              <div style={{ color: feature.color, fontWeight: 600 }}>
                {feature.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          style={{
            background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
            padding: "10px 24px",
            borderRadius: "10px",
            margin: "10px 0",
            display: "inline-block",
            border: "2px solid rgba(59, 130, 246, 0.5)",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              margin: 0,
              color: "#0a1628",
            }}
          >
            START TODAY
          </p>
        </div>

        {/* Hashtags */}
        <div style={{ margin: "8px 0", fontSize: "0.9rem" }}>
          <p style={{ color: "#60a5fa", margin: "4px 0", fontWeight: 500 }}>
            #LearnBreton #BretonRevival
          </p>
          <p style={{ color: "#a8b8cf", margin: "4px 0", fontSize: "0.8rem" }}>
            bretonrevival.example
          </p>
        </div>

        {/* Bottom decoration */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            margin: "8px 0 0",
            fontSize: "1.3rem",
          }}
        >
          🔤 Brezhoneg 🔤
        </div>
      </div>
    </div>
  );
}
