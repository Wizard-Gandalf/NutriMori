import Hero from "../components/Hero";
import NutritionGrid from "../components/NutritionCard";
import RecipeCard from "../components/RecipeCard";
import VideoSection from "../components/VideoSection";
import FAQ from "../components/FAQ";
import { AboutIntro, WhyKelor } from "./About";
import { Tips } from "./Recipe";
import { pudingKelor } from "../data/recipes";
import { VeinDivider, Eyebrow, Btn } from "../components/Shared";
import { Reveal } from "../hooks/useReveal";
import { C, FONT_DISPLAY } from "../utils/theme";

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
