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
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700&auto=format&fit=crop&q=80"
            alt="Misha Helling"
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
            Sobre Misha
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
            Vivir con propósito,<br />crear con pasión.
          </h2>
          <div style={{ width: "40px", height: "1px", background: "var(--tierra)", marginBottom: "1.5rem" }} />
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--text)", marginBottom: "1rem", opacity: 0.85 }}>
            Misha Helling es guatemalteca, emprendedora, escritora y jinete. Su vida es un mapa de pasiones que convergen: la disciplina del deporte ecuestre, el amor por los animales, el poder de las palabras y el deseo de impulsar a otras mujeres a alcanzar su máximo potencial.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--text)", opacity: 0.85 }}>
            A través de sus distintos proyectos, ha construido un ecosistema de valor que refleja quién es: auténtica, comprometida y siempre en movimiento.
          </p>
        </div>
      </div>
    </section>
  );
}
