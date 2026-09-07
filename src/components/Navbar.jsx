import { useState, useEffect } from "react";

const navLinks = [
  { label: "Equitación", href: "#equitacion" },
  { label: "Premium Barf", href: "#barf" },
  { label: "Libros", href: "#libros" },
  { label: "The Hive", href: "#hive" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1.4rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.5s ease, backdrop-filter 0.5s ease, padding 0.4s ease",
        background: scrolled ? "rgba(38,56,47,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        paddingBlock: scrolled ? "1rem" : "1.4rem",
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.4rem",
          fontWeight: 400,
          letterSpacing: "0.06em",
          color: "var(--white)",
          transition: "opacity 0.3s",
        }}
      >
        Misha Helling
      </a>

      {/* Desktop links */}
      <ul
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
          alignItems: "center",
        }}
        className="nav-links"
      >
        {navLinks.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.78rem",
                fontWeight: 400,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--white)",
                opacity: 0.85,
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 1)}
              onMouseLeave={(e) => (e.target.style.opacity = 0.85)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
