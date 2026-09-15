import {
  eventBookTitle,
  eventDescription,
  eventMedia,
  eventPress,
  eventSocial,
} from "../data/bookEvent";

function LinkList({ title, links }) {
  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.68rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--tierra)",
          marginBottom: "1.2rem",
        }}
      >
        {title}
      </p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {links.map((item, i) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: "1.5rem",
              padding: "1.1rem 0",
              borderTop: i === 0 ? "1px solid rgba(28,28,25,0.12)" : "none",
              borderBottom: "1px solid rgba(28,28,25,0.12)",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.6)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
          >
            <span>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.15rem",
                  fontStyle: "italic",
                  color: "var(--green-dark)",
                }}
              >
                {item.outlet}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  color: "var(--text)",
                  opacity: 0.6,
                  marginLeft: "0.9rem",
                }}
              >
                {item.desc}
              </span>
            </span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--green-dark)", flexShrink: 0 }}>
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function BookEvent() {
  const [main, ...rest] = eventMedia;

  return (
    <section
      id="evento"
      className="section-pad-v"
      style={{
        background: "var(--bg-primary)",
      }}
    >
      {/* Header */}
      <div className="pad-h" style={{ marginBottom: "3.5rem" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--tierra)", marginBottom: "0.8rem" }}>
          04 — Lanzamiento
        </p>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.8rem, 5vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--green-dark)",
            letterSpacing: "-0.01em",
            marginBottom: "1.5rem",
          }}
        >
          Noche de<br />
          <em style={{ fontStyle: "italic" }}>Lanzamiento</em>
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--text)", opacity: 0.7, maxWidth: "480px" }}>
          {eventDescription}
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--tierra)", marginTop: "1rem" }}>
          {eventBookTitle}
        </p>
      </div>

      {/* Media grid: video + photos */}
      <div className="event-media-grid pad-h">
        <div className="event-media-main" style={{ position: "relative", overflow: "hidden" }}>
          {main.type === "video" ? (
            <video
              src={main.src}
              poster={main.poster}
              controls
              playsInline
              preload="none"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", background: "#000" }}
            />
          ) : (
            <img
              src={main.src}
              alt={main.alt}
              loading="lazy"
              decoding="async"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          )}
        </div>

        {rest.map((item, i) => (
          <div key={item.src} className={`event-media-cell event-media-cell-${i + 1}`} style={{ overflow: "hidden" }}>
            {item.type === "video" ? (
              <video
                src={item.src}
                poster={item.poster}
                controls
                playsInline
                preload="none"
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block", background: "#000" }}
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            )}
          </div>
        ))}
      </div>

      {/* Press & social coverage */}
      <div className="pad-h grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginTop: "5rem" }}>
        <LinkList title="En los medios" links={eventPress} />
        <LinkList title="En redes sociales" links={eventSocial} />
      </div>
    </section>
  );
}
