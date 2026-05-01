"use client";

import { useState } from "react";

interface FAQItemProps {
  q: string;
  a: string;
}

const T = {
  navy: "#262B21",
  gold: "#9BA19A",
  white: "#ffffff",
  textLight: "#6b7268",
  border: "#d8d2c8",
};

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function FAQItem({ q, a }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: T.white,
        borderRadius: 8,
        padding: "20px 24px",
        cursor: "pointer",
        border: `1px solid ${open ? T.gold : T.border}`,
        transition: "all 0.3s",
      }}
      role="button"
      aria-expanded={open}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            fontWeight: 500,
            color: T.navy,
            paddingRight: 16,
          }}
        >
          {q}
        </h3>
        <span
          style={{
            color: T.gold,
            transform: open ? "rotate(90deg)" : "none",
            transition: "transform 0.25s",
            flexShrink: 0,
          }}
        >
          <ChevronRight />
        </span>
      </div>
      {open && (
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: T.textLight,
            lineHeight: 1.8,
            marginTop: 14,
            paddingTop: 14,
            borderTop: `1px solid ${T.border}`,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

interface FAQListProps {
  items: Array<{ q: string; a: string }>;
}

export default function FAQList({ items }: FAQListProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((item, i) => (
        <FAQItem key={i} q={item.q} a={item.a} />
      ))}
    </div>
  );
}
