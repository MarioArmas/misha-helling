import { useEffect, useRef, useState } from "react";
import { hiveStats, hiveImages, hiveQuote, hiveJoinUrl, hiveInstagramUrl } from "../data/theHive";
import theHiveLogo from "../assets/the-hive-logo.jpg";

function useCountUp(target, duration = 2000, trigger) {
  const [count, setCount] = useState(0);
  const rawNum = parseInt(target.replace(/\D/g, ""));
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = rawNum / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= rawNum) { setCount(rawNum); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, rawNum, duration]);

  return count + suffix;
}

function StatItem({ number, label }) {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const display = useCountUp(number, 2000, triggered);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(4.5rem, 10vw, 9rem)",
          fontWeight: 300,
          lineHeight: 0.9,
          color: "var(--white)",
          letterSpacing: "-0.03em",
        }}
      >
        {display}
      </div>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.78rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(250,249,245,0.55)",
          marginTop: "0.8rem",
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default function TheHive() {
  return (
    <section
      id="hive"
      style={{
        background: "var(--text)",
        overflow: "hidden",
      }}
    >
      {/* Top: hero image + headline */}
      <div className="hive-hero" style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <img
          src={hiveImages[0]}
          alt="The Hive Community"
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.45) saturate(0.8)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(250,249,245,0.5)", marginBottom: "1rem" }}>
            04 — Comunidad
          </p>
          {/* Logo de la comunidad */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              border: "1px solid rgba(250,249,245,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
              overflow: "hidden",
              background: "var(--white)",
            }}
          >
            <img
              src={theHiveLogo}
              alt="The Hive"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 6vw, 6rem)",
              fontWeight: 300,
              color: "var(--white)",
              letterSpacing: "0.04em",
              marginBottom: "1rem",
            }}
          >
            The Hive
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              fontStyle: "italic",
              color: "rgba(250,249,245,0.65)",
              maxWidth: "480px",
              lineHeight: 1.5,
            }}
          >
            Mujeres que emprenden,<br />crecen y comparten.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div
        className="hive-stats pad-h"
        style={{
          background: "var(--green-dark)",
          paddingBlock: "5rem",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "2rem",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(250,249,245,0.4)",
            padding: "1.2rem",
          }}
        >
          La Comunidad
        </div>
        {hiveStats.map((s) => (
          <StatItem key={s.label} number={s.number} label={s.label} />
        ))}
      </div>

      {/* Photo grid */}
      <div
        className="hive-photo-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: 0,
        }}
      >
        {/* Large left image */}
        <div className="hive-photo-main" style={{ gridRow: "1 / 3", position: "relative", overflow: "hidden" }}>
          <img
            src={hiveImages[1]}
            alt="The Hive"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        {/* Top-right */}
        <div style={{ overflow: "hidden" }}>
          <img
            src={hiveImages[2]}
            alt="The Hive"
            style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        {/* Top far-right */}
        <div style={{ overflow: "hidden" }}>
          <img
            src={hiveImages[3]}
            alt="The Hive"
            style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        {/* Bottom center */}
        <div
          style={{
            background: "var(--bg-secondary)",
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontStyle: "italic", color: "var(--green-dark)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            "{hiveQuote}"
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--tierra)" }}>
            — Misha Helling, Fundadora
          </p>
        </div>
        {/* Bottom far-right: CTA */}
        <div
          style={{
            background: "var(--tierra)",
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,249,245,0.65)", marginBottom: "1rem" }}>
            Únete a la colmena
          </p>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400, color: "var(--white)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Bienvenida,<br />abejita.
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            <a
              href={hiveJoinUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.78rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--white)",
                borderBottom: "1px solid rgba(250,249,245,0.5)",
                paddingBottom: "0.2rem",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(250,249,245,0.5)")}
            >
              Únete en Facebook →
            </a>
            <a
              href={hiveInstagramUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.78rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--white)",
                borderBottom: "1px solid rgba(250,249,245,0.5)",
                paddingBottom: "0.2rem",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(250,249,245,0.5)")}
            >
              Síguenos en Instagram →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
