import { useState } from "react";
import { C, FONT_BODY, FONT_MONO } from "../utils/theme";

export function Eyebrow({ children, light }) {
  return (
    <div
      style={{
        fontFamily: FONT_MONO,
        fontSize: 12.5,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: light ? C.moringaLight : C.leaf,
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 14,
      }}
    >
      <span style={{ width: 22, height: 1, background: C.moringa, display: "inline-block" }} />
      {children}
    </div>
  );
}

export function Btn({ children, variant = "primary", onClick, href, download }) {
  const base = {
    fontFamily: FONT_BODY,
    fontWeight: 600,
    fontSize: 14.5,
    padding: "13px 22px",
    borderRadius: 999,
    border: "1px solid transparent",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    transition: "transform .18s ease, box-shadow .18s ease, background .18s ease",
  };
  const variants = {
    primary: { background: C.gold, color: "#22280F" },
    ghost: { background: "rgba(255,255,255,0.08)", color: "#fff", border: `1px solid rgba(255,255,255,0.28)` },
    dark: { background: C.forest, color: "#fff" },
  };
  const [hover, setHover] = useState(false);
  const style = {
    ...base,
    ...variants[variant],
    transform: hover ? "translateY(-2px)" : "translateY(0)",
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      download={download}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={style}
    >
      {children}
    </Tag>
  );
}

export function VeinDivider() {
  return (
    <svg width="100%" height="44" viewBox="0 0 1200 44" preserveAspectRatio="none" style={{ display: "block" }}>
      <path
        d="M0 22 C 200 5, 300 40, 500 22 S 800 5, 1000 22 S 1150 35 1200 22"
        stroke={C.leaf}
        strokeWidth="1.4"
        fill="none"
        opacity="0.35"
      />
    </svg>
  );
}
