"use client";

import { useState } from "react";

const T = {
  navy: "#262B21",
  gold: "#9BA19A",
  cream: "#F4EEE4",
  textLight: "#6b7268",
  border: "#d8d2c8",
  white: "#ffffff",
  text: "#262B21",
};

const AREAS = ["Private Equity", "Real Estate", "Escrow", "Asesoría Fiscal y Patrimonial", "Consulta General"];
const MONTOS = ["< $100K", "$100K - $500K", "$500K - $1M", "$1M - $5M", "> $5M"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Integración Formspree (cuando se configure el endpoint)
    const endpoint = (import.meta as { env: Record<string, string> }).env["PUBLIC_FORMSPREE_ENDPOINT"];
    if (!endpoint) {
      // Sin endpoint configurado: simular éxito en desarrollo
      setTimeout(() => setStatus("success"), 1000);
      return;
    }
    try {
      const form = e.currentTarget;
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 6,
    border: `1px solid ${T.border}`,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    outline: "none",
    background: T.cream,
    boxSizing: "border-box",
    color: T.text,
    marginBottom: 14,
  };

  if (status === "success") {
    return (
      <div
        style={{
          background: T.white,
          borderRadius: 12,
          padding: 44,
          border: `1px solid ${T.border}`,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: T.navy, marginBottom: 12 }}>
          Consulta registrada con éxito
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: T.textLight, lineHeight: 1.75 }}>
          Un abogado especialista se comunicará con usted en las próximas 24 horas hábiles para agendar su consulta confidencial.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ background: T.white, borderRadius: 12, padding: 44, border: `1px solid ${T.border}` }}
      aria-label="Formulario de consulta"
    >
      {/* Honeypot anti-spam (oculto) */}
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} aria-hidden="true" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 0 }}>
        <input name="nombre" placeholder="Nombre" required style={inputStyle} aria-label="Nombre" />
        <input name="apellido" placeholder="Apellido" required style={inputStyle} aria-label="Apellido" />
      </div>
      <input name="email" type="email" placeholder="Correo electrónico" required style={inputStyle} aria-label="Correo electrónico" />
      <input name="telefono" type="tel" placeholder="Teléfono" style={inputStyle} aria-label="Teléfono" />
      <input name="empresa" placeholder="Empresa (Opcional)" style={inputStyle} aria-label="Empresa" />

      <select name="area" style={{ ...inputStyle }} aria-label="Área de interés" defaultValue="">
        <option value="" disabled>Área de interés</option>
        {AREAS.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>

      <select name="monto" style={{ ...inputStyle }} aria-label="Monto estimado" defaultValue="">
        <option value="" disabled>Monto estimado</option>
        {MONTOS.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>

      <textarea
        name="mensaje"
        placeholder="Describa su consulta..."
        rows={4}
        required
        style={{ ...inputStyle, resize: "vertical" }}
        aria-label="Descripción de la consulta"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: 6,
          border: "none",
          background: status === "sending" ? "#9ba19a" : T.navy,
          color: T.cream,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 15,
          fontWeight: 600,
          cursor: status === "sending" ? "not-allowed" : "pointer",
          letterSpacing: 0.3,
          transition: "background 0.25s",
        }}
      >
        {status === "sending" ? "Enviando..." : "Solicitar Consulta Confidencial"}
      </button>

      {status === "error" && (
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#c0392b", textAlign: "center", marginTop: 12 }}>
          Error al enviar. Por favor intente de nuevo.
        </p>
      )}

      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: T.textLight, textAlign: "center", marginTop: 14 }}>
        🔒 Toda información está protegida por secreto profesional. No compartimos sus datos.
      </p>
    </form>
  );
}
