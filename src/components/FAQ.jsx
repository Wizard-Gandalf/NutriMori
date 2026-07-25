import { useState, useRef } from "react";
import { C, FONT_DISPLAY, FONT_BODY } from "../utils/theme";
import { Eyebrow } from "./Shared";
import { Reveal } from "../hooks/useReveal";

const items = [
  ["Apakah anak balita boleh makan puding kelor?", "Boleh. Puding daun kelor aman dikonsumsi anak balita dalam porsi wajar sebagai pelengkap gizi harian, karena bahan-bahannya alami dan diolah tanpa pengawet."],
  ["Apakah daun kelor harus direbus?", "Ya, daun kelor sebaiknya direbus sebentar (2–3 menit) sebelum diolah untuk mengurangi rasa pahit dan memudahkan proses penghalusan."],
  ["Berapa lama puding bertahan?", "Jika disimpan dalam wadah tertutup di lemari es, puding daun kelor dapat bertahan sekitar 2–3 hari dengan kualitas terbaik."],
  ["Bisakah menggunakan agar warna lain?", "Bisa, namun disarankan menggunakan agar-agar bubuk plain (tanpa rasa dan warna) agar warna hijau alami dari daun kelor tetap terlihat."],
];

function FaqItem({ q, a, isOpen, onToggle }) {
  const ref = useRef(null);
  return (
    <div style={{ borderBottom: `1px solid ${C.line}` }}>
      <button
        onClick={onToggle}
        className="flex items-center justify-between gap-4"
        style={{
          width: "100%",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "20px 4px",
          fontFamily: FONT_BODY,
          fontSize: 16,
          fontWeight: 600,
          color: C.forest,
        }}
      >
        <span>{q}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={C.leaf}
          strokeWidth="2"
          style={{ flexShrink: 0, transition: "transform .3s", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <div
        style={{
          maxHeight: isOpen ? (ref.current ? ref.current.scrollHeight : 200) : 0,
          overflow: "hidden",
          transition: "max-height .35s ease",
        }}
      >
        <p ref={ref} style={{ margin: "0 4px 22px", color: C.inkSoft, fontSize: 14.5, lineHeight: 1.65, maxWidth: "60ch" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section id="faq" style={{ padding: "84px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: "clamp(28px,3.6vw,38px)", color: C.forest, margin: 0 }}>
            Pertanyaan seputar puding kelor
          </h2>
        </Reveal>
        <Reveal>
          <div style={{ maxWidth: 760, marginTop: 32 }}>
            {items.map(([q, a], i) => (
              <FaqItem key={q} q={q} a={a} isOpen={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
