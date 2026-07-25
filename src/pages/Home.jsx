import Hero from "../components/Hero";
import NutritionGrid from "../components/NutritionCard";
import RecipeCard from "../components/RecipeCard";
import FAQ from "../components/FAQ";
import { AboutIntro, WhyKelor } from "./About";
import { Tips } from "./Recipe";
import { pudingKelor } from "../data/recipes";
import { VeinDivider, Eyebrow, Btn } from "../components/Shared";
import { Reveal } from "../hooks/useReveal";
import { C, FONT_DISPLAY, FONT_MONO } from "../utils/theme";

function VideoSection() {
  return (
    <section id="video" style={{ padding: "84px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <Eyebrow>Video Tutorial</Eyebrow>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: "clamp(28px,3.6vw,38px)", color: C.forest, margin: 0 }}>
            Lihat langsung prosesnya
          </h2>
        </Reveal>
        <Reveal>
          <div
            className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center"
            style={{
              background: C.forest,
              borderRadius: 22,
              overflow: "hidden",
              color: "#fff",
              boxShadow: "0 20px 50px -25px rgba(21,46,29,0.35)",
              marginTop: 32,
            }}
          >
            <div
              style={{
                aspectRatio: "16/10",
                background: "radial-gradient(circle at 50% 50%, rgba(124,170,92,0.35), transparent 60%), #0F2216",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                margin: 14,
                borderRadius: 16,
              }}
            >
              <button
                aria-label="Putar video tutorial"
                onClick={() =>
                  alert(
                    "Video tutorial akan tersedia setelah kegiatan sosialisasi berlangsung. Tim KKN akan memperbarui tautan ini."
                  )
                }
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: "50%",
                  background: C.gold,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#22280F" style={{ marginLeft: 3 }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div style={{ padding: "28px 32px" }}>
              <h3 style={{ color: "#fff", fontSize: 21, fontFamily: FONT_DISPLAY, fontWeight: 600, margin: 0 }}>
                Cara Membuat Puding Daun Kelor
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginTop: 10, lineHeight: 1.6 }}>
                Rekaman singkat proses pembuatan puding daun kelor dari hasil kegiatan sosialisasi KKN TIM II UNDIP
                2026 di Desa Jaten.
              </p>
              <div className="flex gap-4" style={{ marginTop: 18 }}>
                <span style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.moringaLight }}>⏱ 5 MENIT</span>
                <span style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.moringaLight }}>📍 DESA JATEN</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DownloadCTA() {
  return (
    <section style={{ padding: "84px 0", background: C.cream }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <div
            className="flex items-center justify-between gap-6 flex-wrap"
            style={{
              background: `linear-gradient(120deg, ${C.forest2}, ${C.forest})`,
              borderRadius: 22,
              padding: 44,
              color: "#fff",
              boxShadow: "0 20px 50px -25px rgba(21,46,29,0.35)",
            }}
          >
            <div>
              <h3 style={{ color: "#fff", fontSize: 24, fontFamily: FONT_DISPLAY, fontWeight: 600, maxWidth: "26ch", margin: 0 }}>
                Unduh versi cetak leaflet NutriMori
              </h3>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 14, marginTop: 8, maxWidth: "40ch" }}>
                Simpan salinan digital leaflet agar materi edukasi tetap bisa diakses kapan pun dibutuhkan.
              </p>
            </div>
            <Btn variant="primary" href="/leaflet-nutrimori.pdf" download="Leaflet-NutriMori.pdf">
              ⬇ Download Leaflet PDF
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <VeinDivider />
      <AboutIntro />
      <WhyKelor />
      <VeinDivider />
      <NutritionGrid />
      <RecipeCard recipe={pudingKelor} />
      <VeinDivider />
      <VideoSection />
      <Tips tips={pudingKelor.tips} />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
