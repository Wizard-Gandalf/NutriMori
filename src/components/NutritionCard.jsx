import { useState } from "react";
import { C, FONT_DISPLAY, FONT_BODY, FONT_MONO } from "../utils/theme";
import { Eyebrow } from "./Shared";
import { Reveal } from "../hooks/useReveal";

const nutrients = [
  { title: "Protein", tag: "MAKRONUTRIEN", body: "Membantu pertumbuhan dan perbaikan jaringan tubuh anak.", icon: <><circle cx="12" cy="12" r="9" /><path d="M9 12h6M12 9v6" /></> },
  { title: "Vitamin A", tag: "MIKRONUTRIEN", body: "Menjaga kesehatan mata dan sistem imun sejak usia dini.", icon: <><path d="M12 3a5 5 0 015 5c0 3-5 9-5 9s-5-6-5-9a5 5 0 015-5z" /><circle cx="12" cy="8" r="1.6" /></> },
  { title: "Vitamin C", tag: "MIKRONUTRIEN", body: "Meningkatkan daya tahan tubuh terhadap infeksi dan penyakit.", icon: <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z" /> },
  { title: "Kalsium", tag: "MINERAL", body: "Membantu pertumbuhan dan kekuatan tulang serta gigi anak.", icon: <path d="M12 3c3 3 6 6.5 6 10a6 6 0 01-12 0c0-3.5 3-7 6-10z" /> },
  { title: "Zat Besi", tag: "MINERAL", body: "Mencegah anemia dan mendukung produksi sel darah merah.", icon: <path d="M12 2v6M12 16v6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M16 12h6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2" /> },
];

export function NutriCard({ data }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div onClick={() => setFlipped((f) => !f)} style={{ perspective: 1200, height: 190, cursor: "pointer" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform .55s cubic-bezier(.4,.2,.2,1)",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            borderRadius: 18,
            padding: "20px 16px",
            display: "flex",
            flexDirection: "column",
            border: `1px solid ${C.line}`,
            background: C.cream,
            justifyContent: "space-between",
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.6">
            {data.icon}
          </svg>
          <div>
            <h3 style={{ fontSize: 15, fontFamily: FONT_BODY, fontWeight: 700, marginTop: 14, color: C.ink }}>
              {data.title}
            </h3>
            <span style={{ fontSize: 11, color: C.inkSoft, fontFamily: FONT_MONO }}>{data.tag}</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            borderRadius: 18,
            padding: "20px 16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: `1px solid ${C.line}`,
            background: C.forest,
            color: "#fff",
            transform: "rotateY(180deg)",
          }}
        >
          <p style={{ fontSize: 13.5, lineHeight: 1.55, margin: 0, color: "rgba(255,255,255,0.9)" }}>{data.body}</p>
        </div>
      </div>
    </div>
  );
}

export default function NutritionGrid() {
  return (
    <section id="gizi" style={{ padding: "84px 0", background: C.forest, color: "#fff" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <Eyebrow light>Kandungan Gizi</Eyebrow>
          <h2
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 600,
              fontSize: "clamp(28px,3.6vw,38px)",
              lineHeight: 1.08,
              color: "#fff",
              margin: 0,
            }}
          >
            Lima nutrisi kunci dalam
            <br />
            tiap lembar daun kelor.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15.5, lineHeight: 1.7, marginTop: 14 }}>
            Ketuk kartu untuk melihat manfaatnya bagi tumbuh kembang anak.
          </p>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4" style={{ marginTop: 44 }}>
            {nutrients.map((c) => (
              <NutriCard key={c.title} data={c} />
            ))}
          </div>
        </Reveal>
        <p style={{ textAlign: "center", fontSize: 12.5, color: "rgba(255,255,255,0.55)", marginTop: 18, fontFamily: FONT_MONO }}>
          ketuk untuk membalik kartu
        </p>
      </div>
    </section>
  );
}
