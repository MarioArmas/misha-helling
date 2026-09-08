import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {/* Background image via Unsplash placeholder */}
      <img
        src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1800&auto=format&fit=crop&q=80"
        alt="Misha Helling"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          transform: loaded ? "scale(1)" : "scale(1.04)",
          transition: "transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,14,12,0.72) 0%, rgba(10,14,12,0.18) 55%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 1.2s ease 0.4s, transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.4s",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(250,249,245,0.7)",
            marginBottom: "1.2rem",
          }}
        >
          Emprendedora · Escritora · Jinete
        </p>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            fontWeight: 300,
            lineHeight: 1.02,
            color: "var(--white)",
            letterSpacing: "-0.01em",
          }}
        >
          Misha<br />Helling
        </h1>
        <div
          style={{
            width: "48px",
            height: "1px",
            background: "rgba(250,249,245,0.5)",
            margin: "2rem 0",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.95rem",
            fontWeight: 300,
            color: "rgba(250,249,245,0.75)",
            maxWidth: "420px",
            lineHeight: 1.7,
          }}
        >
          Apasionada por los caballos, los perros, las palabras y las mujeres que se atreven a soñar en grande.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll-indicator"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: loaded ? 0.6 : 0,
          transition: "opacity 1s ease 1.4s",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--white)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "var(--white)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollLine {
          0%, 100% { transform: scaleY(1); opacity: 0.6; }
          50% { transform: scaleY(0.4); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
