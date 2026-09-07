const photos = [
  { src: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=900&auto=format&fit=crop&q=80", tall: true },
  { src: "https://images.unsplash.com/photo-1508175800969-525c72a047dd?w=900&auto=format&fit=crop&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1553284965-0acf7b4f5e6a?w=900&auto=format&fit=crop&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=900&auto=format&fit=crop&q=80", tall: true },
  { src: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=900&auto=format&fit=crop&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1534438097545-a2c22c879b6d?w=900&auto=format&fit=crop&q=80", tall: false },
];

export default function Equitacion() {
  return (
    <section
      id="equitacion"
      style={{
        background: "var(--green-dark)",
        padding: "8rem 0",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ padding: "0 4rem", marginBottom: "4rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
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
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.9rem",
            lineHeight: 1.8,
            color: "rgba(250,249,245,0.65)",
            maxWidth: "340px",
            paddingBottom: "0.5rem",
          }}
        >
          El deporte ecuestre como forma de vida. La comunicación silenciosa entre jinete y caballo, la paciencia, la disciplina y la elegancia que solo el tiempo y la dedicación logran construir.
        </p>
      </div>

      {/* Masonry gallery */}
      <div
        style={{
          padding: "0 4rem",
          columns: "3 300px",
          columnGap: "1rem",
          gap: "1rem",
        }}
      >
        {photos.map((p, i) => (
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
      <div style={{ padding: "4rem 4rem 0", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontStyle: "italic", color: "rgba(250,249,245,0.55)", fontWeight: 300, maxWidth: "600px", margin: "0 auto" }}>
          "El caballo es un espejo del alma."
        </p>
      </div>
    </section>
  );
}
