import { aboutData } from "../data/about";

export default function About() {
  return (
    <section
      style={{
        background: "var(--bg-primary)",
        padding: "8rem 4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "920px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
        {/* Left: image */}
        <div style={{ position: "relative" }}>
          <img
            src={aboutData.photo}
            alt={aboutData.photoAlt}
            style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              right: "-1.5rem",
              width: "140px",
              height: "140px",
              background: "var(--bg-secondary)",
              zIndex: -1,
            }}
          />
        </div>

        {/* Right: text */}
        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--tierra)", marginBottom: "1rem" }}>
            {aboutData.label}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--green-dark)",
              marginBottom: "1.5rem",
            }}
          >
            {aboutData.title}
          </h2>
          <div style={{ width: "40px", height: "1px", background: "var(--tierra)", marginBottom: "1.5rem" }} />
          {aboutData.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--text)", marginBottom: "1rem", opacity: 0.85 }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

