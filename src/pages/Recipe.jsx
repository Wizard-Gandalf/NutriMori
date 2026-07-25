import RecipeCard from "../components/RecipeCard";
import FAQ from "../components/FAQ";
import { pudingKelor } from "../data/recipes";
import { C, FONT_DISPLAY } from "../utils/theme";
import { Eyebrow } from "../components/Shared";
import { Reveal } from "../hooks/useReveal";

function Tips({ tips }) {
  return (
    <section style={{ padding: "84px 0", background: C.cream }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <Eyebrow>Tips Pengolahan</Eyebrow>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: "clamp(28px,3.6vw,38px)", color: C.forest, margin: 0 }}>
            Agar hasil puding lebih maksimal
          </h2>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginTop: 32 }}>
            {tips.map((t, i) => (
              <div key={t} style={{ background: C.cream, border: `1px solid ${C.line}`, borderRadius: 16, padding: "22px 18px" }}>
                <div style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontSize: 26, color: C.moringa, marginBottom: 10 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p style={{ fontSize: 13.5, color: C.inkSoft, lineHeight: 1.55, margin: 0 }}>{t}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { Tips };

export default function Recipe() {
  return (
    <>
      <RecipeCard recipe={pudingKelor} />
      <Tips tips={pudingKelor.tips} />
      <FAQ />
    </>
  );
}
