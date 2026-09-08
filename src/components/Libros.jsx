import { useRef, useState } from "react";
import { books } from "../data/libros";

export default function Libros() {
  const trackRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const scrollBy = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 420, behavior: "smooth" });
    }
  };

  return (
    <section
      id="libros"
      className="section-pad-v"
      style={{
        background: "var(--bg-secondary)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div className="pad-h flex-header" style={{ marginBottom: "3.5rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--tierra)", marginBottom: "0.8rem" }}>
            03 — Literatura
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 5vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--green-dark)",
              letterSpacing: "-0.01em",
            }}
          >
            Sus<br />
            <em style={{ fontStyle: "italic" }}>Libros</em>
          </h2>
        </div>

        {/* Nav arrows */}
        <div style={{ display: "flex", gap: "0.8rem", paddingBottom: "0.5rem" }}>
          {["←", "→"].map((arrow, i) => (
            <button
              key={arrow}
              onClick={() => scrollBy(i === 0 ? -1 : 1)}
              style={{
                width: "48px",
                height: "48px",
                border: "1px solid var(--green-dark)",
                background: "transparent",
                color: "var(--green-dark)",
                fontSize: "1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--green-dark)"; e.currentTarget.style.color = "var(--white)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--green-dark)"; }}
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="pad-h"
        style={{
          display: "flex",
          gap: "2rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {books.map((book, i) => (
          <div
            key={book.title}
            style={{
              flex: "0 0 340px",
              scrollSnapAlign: "start",
              position: "relative",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Book cover */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                src={book.cover}
                alt={book.title}
                style={{
                  width: "100%",
                  aspectRatio: "2/3",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1), filter 0.6s",
                  filter: hoveredIdx === i ? "brightness(0.55)" : "brightness(1)",
                  transform: hoveredIdx === i ? "scale(1.04)" : "scale(1)",
                }}
              />

              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: hoveredIdx === i ? 1 : 0,
                  transition: "opacity 0.5s ease",
                }}
              >
                <a
                  href={book.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    color: "var(--white)",
                    letterSpacing: "0.04em",
                    borderBottom: "1px solid rgba(250,249,245,0.6)",
                    paddingBottom: "0.2rem",
                    transition: "border-color 0.3s",
                  }}
                >
                  {book.cta}
                </a>
              </div>
            </div>

            {/* Book info */}
            <div style={{ padding: "1.5rem 0 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--white)",
                    background: book.color,
                    padding: "0.2rem 0.6rem",
                  }}
                >
                  {book.genre}
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "var(--text)", opacity: 0.5 }}>{book.year}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 500, color: "var(--text)", marginBottom: "0.5rem" }}>{book.title}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.84rem", lineHeight: 1.75, color: "var(--text)", opacity: 0.65 }}>{book.synopsis}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
