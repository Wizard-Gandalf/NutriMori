import { useState } from "react";
import { FONT_DISPLAY } from "../utils/theme";
import { C } from "../utils/theme";

const links = [
  ["#beranda", "Beranda"],
  ["#tentang", "Tentang"],
  ["#kelor", "Daun Kelor"],
  ["#gizi", "Kandungan Gizi"],
  ["#resep", "Resep"],
  ["#video", "Video"],
  ["#faq", "FAQ"],
  ["#kontak", "Kontak"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(21,46,29,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="flex items-center justify-between gap-4"
        style={{ maxWidth: 1080, margin: "0 auto", padding: "14px 20px", position: "relative" }}
      >
        <a
          href="#beranda"
          className="flex items-center gap-2"
          style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 19, color: "#fff", textDecoration: "none" }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C9 6 6 9 6 13a6 6 0 0012 0c0-4-3-7-6-11z" fill={C.moringa} />
            <path d="M12 6v14" stroke={C.forest} strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          NutriMori
        </a>

        <ul className="hidden md:flex gap-0 list-none m-0 p-0">
          {links.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="whitespace-nowrap"
                style={{
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.72)",
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: 999,
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex items-center justify-center"
          aria-label="Buka menu"
          onClick={() => setOpen((o) => !o)}
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
            borderRadius: 8,
            padding: "7px 9px",
            cursor: "pointer",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        {open && (
          <ul
            className="md:hidden flex flex-col list-none m-0"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: C.forest,
              padding: "10px 16px 18px",
              gap: 2,
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {links.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 8px",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
