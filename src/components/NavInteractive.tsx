"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/private-equity", label: "Private Equity" },
  { href: "/real-estate", label: "Real Estate" },
  { href: "/escrow", label: "Escrow" },
  { href: "/tax-advisory", label: "Tax Advisory" },
  { href: "/contacto", label: "Contacto" },
];

const T = {
  navy: "#262B21",
  navyMid: "#3a4035",
  gold: "#9BA19A",
  goldLight: "#b5bab4",
  cream: "#F4EEE4",
  white: "#ffffff",
};

function ScaleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 7l3-4 3 4M15 7l3-4 3 4M3 7h6M15 7h6M6 7l-3 9a5 5 0 006 0L6 7zM18 7l-3 9a5 5 0 006 0L18 7z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export default function NavInteractive() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isHome = currentPath === "/";
  const solidBg = scrolled || !isHome;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          background: solidBg ? "rgba(38,43,33,0.97)" : "transparent",
          borderBottom: solidBg ? `1px solid ${T.navyMid}` : "none",
          backdropFilter: "blur(14px)",
          transition: "all 0.4s",
        }}
        aria-label="Navegación principal"
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 70,
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              color: T.gold,
            }}
            aria-label="MERIDIAN - Inicio"
          >
            <ScaleIcon />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18,
                fontWeight: 600,
                color: T.white,
                letterSpacing: 0.5,
              }}
            >
              MERIDIAN
            </span>
          </a>

          {/* Desktop links */}
          <nav aria-label="Menú principal" style={{ display: "flex", alignItems: "center", gap: 2 }} className="desktop-nav">
            {LINKS.map((l) => {
              const active = currentPath === l.href || (l.href !== "/" && currentPath.startsWith(l.href));
              return (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px 14px",
                    color: active ? T.white : "rgba(255,255,255,0.5)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: active ? 500 : 400,
                    borderBottom: active ? `1px solid ${T.gold}` : "1px solid transparent",
                    transition: "all 0.25s",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </a>
              );
            })}
            <div style={{ width: 1, height: 22, background: T.navyMid, margin: "0 8px" }} />
            <a
              href="/contacto"
              style={{
                background: T.cream,
                border: "none",
                color: T.navy,
                padding: "9px 20px",
                borderRadius: 4,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: 0.5,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Consulta Gratuita
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{ background: "none", border: "none", color: T.white, cursor: "pointer", display: "none" }}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 70,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 199,
            background: T.navy,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
          role="dialog"
          aria-label="Menú móvil"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "14px 0",
                color: currentPath === l.href ? T.cream : "rgba(255,255,255,0.55)",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                fontWeight: 600,
                textAlign: "left",
                borderBottom: `1px solid ${T.navyMid}`,
                textDecoration: "none",
                display: "block",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contacto"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 20,
              background: T.cream,
              border: "none",
              color: T.navy,
              padding: "14px",
              borderRadius: 4,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
            }}
          >
            Consulta Gratuita
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hamburger { display: flex !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
