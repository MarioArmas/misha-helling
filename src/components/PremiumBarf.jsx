const benefits = [
  { icon: "🦴", title: "100% Natural", desc: "Ingredientes reales, sin procesados ni aditivos artificiales." },
  { icon: "🐾", title: "Digestión Óptima", desc: "Fórmula diseñada para una digestión saludable y completa." },
  { icon: "✨", title: "Pelaje Brillante", desc: "Nutrición que se refleja en el exterior de tu mascota." },
  { icon: "❤️", title: "Asesoría Personalizada", desc: "Acompañamiento experto para la transición y el mantenimiento." },
];

export default function PremiumBarf() {
  return (
    <section
      id="barf"
      style={{
        background: "var(--white)",
        padding: "8rem 4rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section label */}
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--tierra)", marginBottom: "0.8rem" }}>
          02 — Nutrición Animal
        </p>

        {/* Split header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "flex-start", marginBottom: "5rem" }}>
          <div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                color: "var(--text)",
                letterSpacing: "-0.01em",
              }}
            >
              Premium<br />
              <span style={{ color: "#7B1A2A", fontStyle: "italic" }}>BARF</span>
            </h2>
            <div style={{ width: "40px", height: "2px", background: "#7B1A2A", margin: "1.5rem 0" }} />
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--text)", opacity: 0.75, maxWidth: "400px" }}>
              Dieta B.A.R.F. — Biologically Appropriate Raw Food. Alimento 100% natural, crudo y balanceado para perros y gatos. Porque la salud de tu mascota empieza en el plato.
            </p>
            <a
              href="https://wa.me/PFNEW7LIPIKHP1"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "2rem",
                padding: "0.85rem 2rem",
                background: "#7B1A2A",
                color: "var(--white)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.78rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#5e1220")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#7B1A2A")}
            >
              Hacer un pedido →
            </a>
          </div>

          {/* Hero product image */}
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=700&auto=format&fit=crop&q=80"
              alt="Premium Barf - Alimento natural para perros"
              style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }}
            />
            {/* Logo badge overlay */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "#7B1A2A",
                color: "var(--white)",
                padding: "0.6rem 1rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Real Food · True Health
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", borderTop: "1px solid var(--bg-secondary)", paddingTop: "3rem" }}>
          {benefits.map((b) => (
            <div key={b.title}>
              <div style={{ fontSize: "1.6rem", marginBottom: "0.8rem" }}>{b.icon}</div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 500, color: "var(--text)", marginBottom: "0.4rem" }}>{b.title}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--text)", opacity: 0.65 }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Product row */}
        <div style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {[
            { img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=80", name: "Mix de Proteínas", desc: "Res, pollo y pavo en proporciones óptimas." },
            { img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format&fit=crop&q=80", name: "Pack Cachorros", desc: "Nutrición balanceada para las primeras etapas de vida." },
            { img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=80", name: "BARF Felino", desc: "Fórmula especializada para gatos adultos." },
          ].map((prod) => (
            <div key={prod.name} style={{ overflow: "hidden", position: "relative" }}>
              <div style={{ overflow: "hidden" }}>
                <img
                  src={prod.img}
                  alt={prod.name}
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <div style={{ padding: "1.2rem 0" }}>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 500, color: "var(--text)", marginBottom: "0.3rem" }}>{prod.name}</h4>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--text)", opacity: 0.6 }}>{prod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
