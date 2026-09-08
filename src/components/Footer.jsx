const links = [
  { label: "Equitación", href: "#equitacion" },
  { label: "Premium Barf", href: "#barf" },
  { label: "Libros", href: "#libros" },
  { label: "The Hive", href: "#hive" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/misha_helling" },
  { label: "Facebook", href: "https://www.facebook.com/mishamhelling" },
];

export default function Footer() {
  return (
    <footer
      className="pad-h"
      style={{
        background: "var(--green-dark)",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        color: "var(--white)",
      }}
    >
      <div
        className="footer-grid"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "3rem",
          paddingBottom: "3rem",
          borderBottom: "1px solid rgba(250,249,245,0.12)",
          marginBottom: "2rem",
        }}
      >
        {/* Brand */}
        <div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 300, marginBottom: "1rem", letterSpacing: "0.02em" }}>
            Misha Helling
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "rgba(250,249,245,0.55)", maxWidth: "300px" }}>
            Emprendedora · Escritora · Jinete.<br />Guatemala City, Guatemala.
          </p>
        </div>

        {/* Nav */}
        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,249,245,0.4)", marginBottom: "1.2rem" }}>
            Secciones
          </p>
          <ul style={{ listStyle: "none" }}>
            {links.map((l) => (
              <li key={l.label} style={{ marginBottom: "0.6rem" }}>
                <a
                  href={l.href}
                  style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "rgba(250,249,245,0.7)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(250,249,245,0.7)")}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,249,245,0.4)", marginBottom: "1.2rem" }}>
            Redes
          </p>
          <ul style={{ listStyle: "none" }}>
            {socials.map((s) => (
              <li key={s.label} style={{ marginBottom: "0.6rem" }}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "rgba(250,249,245,0.7)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(250,249,245,0.7)")}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(250,249,245,0.3)" }}>
          © 2025 Misha Helling. Todos los derechos reservados.
        </p>
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.72rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(250,249,245,0.4)",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
          onMouseLeave={(e) => (e.target.style.color = "rgba(250,249,245,0.4)")}
        >
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}
