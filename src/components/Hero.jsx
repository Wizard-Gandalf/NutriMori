import { C, FONT_DISPLAY, FONT_MONO } from "../utils/theme";
import { Eyebrow } from "./Shared";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <header
      id="beranda"
      style={{
        background: `linear-gradient(175deg, ${C.forest} 0%, ${C.forest2} 55%, #24502E 100%)`,
        color: "#fff",
        padding: "64px 0 90px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(124,170,92,0.25), transparent 45%), radial-gradient(circle at 10% 90%, rgba(217,164,65,0.14), transparent 40%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow light>KKN TIM II UNDIP 2026 · DESA JATEN</Eyebrow>
            <h1
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 600,
                fontSize: "clamp(38px, 6vw, 62px)",
                lineHeight: 0.98,
                color: "#fff",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Pangan bergizi
              <br />
              dari <em style={{ fontStyle: "italic", color: C.moringaLight }}>daun kelor</em>,
              <br />
              untuk anak Indonesia.
            </h1>
            <p
              style={{
                marginTop: 20,
                fontSize: 17,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.78)",
                maxWidth: "46ch",
              }}
            >
              Media edukasi digital mengenai pemanfaatan daun kelor sebagai pangan bergizi dalam mendukung pemenuhan
              gizi anak dan pencegahan stunting.
            </p>

          </div>
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5)",
              aspectRatio: "4/5",
              transform: "rotate(1.2deg)",
            }}
          >
            <img src={heroImg} alt="Daun kelor segar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div
              style={{
                position: "absolute",
                left: 16,
                bottom: 16,
                background: "rgba(21,46,29,0.72)",
                backdropFilter: "blur(6px)",
                color: "#fff",
                padding: "9px 14px",
                borderRadius: 999,
                fontSize: 12,
                fontFamily: FONT_MONO,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.moringaLight }} />
              Moringa oleifera — The Miracle Tree
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
