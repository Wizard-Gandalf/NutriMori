import { C, FONT_DISPLAY, FONT_BODY, FONT_MONO } from "../utils/theme";
import { Eyebrow } from "./Shared";
import { Reveal } from "../hooks/useReveal";
import puddingImg from "../assets/pudding.jpg";

function ListCard({ title, list }) {
  return (
    <div style={{ background: C.cream, border: `1px solid ${C.line}`, borderRadius: 22, padding: 28 }}>
      <h3 style={{ fontSize: 17, marginBottom: 16, color: C.ink, fontFamily: FONT_BODY, fontWeight: 700 }}>{title}</h3>
      <ul className="grid gap-2.5 list-none m-0 p-0">
        {list.map((li, i) => (
          <li
            key={li}
            className="flex items-center gap-2.5"
            style={{
              fontSize: 14.5,
              color: C.inkSoft,
              paddingBottom: 10,
              borderBottom: i === list.length - 1 ? "none" : "1px dashed " + C.line,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.moringa, flexShrink: 0 }} />
            {li}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeCard({ recipe }) {
  const { title, description, bahan, alat, steps } = recipe;

  return (
    <section id="resep" style={{ padding: "84px 0", background: C.cream }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <Eyebrow>Resep Puding</Eyebrow>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: "clamp(28px,3.6vw,38px)", color: C.forest, margin: 0 }}>
            {title}
          </h2>
          <p style={{ color: C.inkSoft, fontSize: 15.5, lineHeight: 1.7, marginTop: 14, maxWidth: 640 }}>{description}</p>
        </Reveal>

        <Reveal>
          <div
            style={{
              borderRadius: 22,
              overflow: "hidden",
              boxShadow: "0 20px 50px -25px rgba(21,46,29,0.35)",
              marginTop: 44,
              marginBottom: 48,
              position: "relative",
            }}
          >
            <img src={puddingImg} alt={`${title} siap saji`} style={{ width: "100%", maxHeight: 420, objectFit: "cover" }} />
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(0deg, rgba(21,46,29,0.85), transparent)",
                color: "#fff",
                padding: "28px 28px 20px",
              }}
            >
              <h3 style={{ color: "#fff", fontSize: 24, fontFamily: FONT_DISPLAY, fontWeight: 600, margin: 0 }}>{title}</h3>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginBottom: 56 }}>
            <ListCard title="🌿 Bahan (Ingredients)" list={bahan} />
            <ListCard title="🔧 Alat (Equipment)" list={alat} />
          </div>
        </Reveal>

        <Reveal>
          <Eyebrow>Cara Pembuatan</Eyebrow>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26, color: C.forest, margin: "0 0 32px" }}>
            {steps.length} langkah mudah
          </h2>
        </Reveal>

        <Reveal>
          <div style={{ position: "relative", paddingLeft: 56 }}>
            <div
              style={{
                position: "absolute",
                left: 19,
                top: 8,
                bottom: 8,
                width: 2,
                background: `linear-gradient(${C.moringa}, ${C.leaf})`,
                borderRadius: 2,
              }}
            />
            {steps.map(([stepTitle, body], i) => (
              <div key={stepTitle} style={{ position: "relative", paddingBottom: i === steps.length - 1 ? 0 : 36 }}>
                <div
                  style={{
                    position: "absolute",
                    left: -56,
                    top: 0,
                    width: 40,
                    height: 40,
                    background: C.forest,
                    color: "#fff",
                    borderRadius: "50% 50% 50% 4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FONT_MONO,
                    fontSize: 14,
                    fontWeight: 600,
                    boxShadow: "0 6px 14px -6px rgba(21,46,29,0.5)",
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={{ fontSize: 16.5, marginBottom: 6, fontFamily: FONT_BODY, fontWeight: 700, color: C.ink }}>
                  {stepTitle}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, color: C.inkSoft, lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
