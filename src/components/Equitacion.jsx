import { equitacionPhotos, equitacionQuote, equitacionDescription } from "../data/equitacion";

export default function Equitacion() {
  return (
    <section
      id="equitacion"
      className="section-pad-v"
      style={{
        background: "var(--green-dark)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div className="pad-h flex-header" style={{ marginBottom: "4rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(250,249,245,0.5)", marginBottom: "0.8rem" }}>
            01 — Disciplina
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 5vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--white)",
              letterSpacing: "-0.01em",
            }}
          >
            Doma<br />
            <em style={{ fontStyle: "italic", color: "rgba(250,249,245,0.65)" }}>Clásica</em>
          </h2>
        </div>
        <p
          className="flex-header-desc"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.9rem",
            lineHeight: 1.8,
            color: "rgba(250,249,245,0.65)",
            maxWidth: "340px",
            paddingBottom: "0.5rem",
          }}
        >
          {equitacionDescription}
        </p>
      </div>

      {/* Masonry gallery */}
      <div
        className="pad-h"
        style={{
          columns: "3 300px",
          columnGap: "1rem",
          gap: "1rem",
        }}
      >
        {equitacionPhotos.map((p, i) => (
          <div
            key={i}
            style={{
              breakInside: "avoid",
              marginBottom: "1rem",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={p.src}
              alt={`Doma ${i + 1}`}
              style={{
                width: "100%",
                aspectRatio: p.tall ? "3/4" : "4/3",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
                filter: "saturate(0.85) contrast(1.05)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>

      {/* Bottom quote */}
      <div className="pad-h" style={{ paddingTop: "4rem", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontStyle: "italic", color: "rgba(250,249,245,0.55)", fontWeight: 300, maxWidth: "600px", margin: "0 auto" }}>
          "{equitacionQuote}"
        </p>
      </div>
    </section>
  );
}
