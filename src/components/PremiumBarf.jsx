import { barfBenefits, barfProducts, barfDescription, barfInstagram, barfHeroImage } from "../data/premiumBarf";
import barfLogo from "../assets/premium-barf-logo.jpg";

export default function PremiumBarf() {
  return (
    <section
      id="barf"
      className="section-pad"
      style={{
        background: "var(--white)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section label */}
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--tierra)", marginBottom: "0.8rem" }}>
          02 — Nutrición Animal
        </p>

        {/* Split header */}
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "flex-start", marginBottom: "5rem" }}>
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
              {barfDescription}
            </p>
            <a
              href={barfInstagram}
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
              src={barfHeroImage}
              alt="Premium Barf - Alimento natural para perros"
              style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }}
            />
            {/* Logo badge overlay */}
            <img
              src={barfLogo}
              alt="Premium Barf logo"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                width: "84px",
                height: "84px",
                borderRadius: "50%",
                boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
              }}
            />
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", borderTop: "1px solid var(--bg-secondary)", paddingTop: "3rem" }}>
          {barfBenefits.map((b) => (
            <div key={b.title}>
              <div style={{ fontSize: "1.6rem", marginBottom: "0.8rem" }}>{b.icon}</div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 500, color: "var(--text)", marginBottom: "0.4rem" }}>{b.title}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--text)", opacity: 0.65 }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Product row */}
        <div className="grid-3" style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {barfProducts.map((prod) => (
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
