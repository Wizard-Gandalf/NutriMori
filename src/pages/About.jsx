import { C, FONT_DISPLAY, FONT_BODY } from "../utils/theme";
import { Eyebrow } from "../components/Shared";
import { Reveal } from "../hooks/useReveal";
import leafImg from "../assets/hero.jpg";

function AboutIntro() {
  return (
    <section id="tentang" style={{ padding: "84px 0", background: C.cream }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <Eyebrow>Tentang NutriMori</Eyebrow>
            <h2
              style={{
                fontFamily: FONT_DISPLAY,
                fontWeight: 600,
                fontSize: "clamp(28px,3.6vw,38px)",
                lineHeight: 1.08,
                color: C.forest,
                margin: 0,
              }}
            >
              Satu sumber informasi,
              <br />
              untuk seluruh warga desa.
            </h2>
            <div className="flex flex-wrap gap-7" style={{ marginTop: 26 }}>
              {[
                ["8", "Bagian materi edukasi"],
                ["5", "Kandungan gizi utama"],
                ["1×", "Scan, akses selamanya"],
              ].map(([n, l]) => (
                <div key={l}>
                  <b style={{ fontFamily: FONT_DISPLAY, fontSize: 28, color: C.forest, display: "block" }}>{n}</b>
                  <span style={{ fontSize: 12.5, color: C.inkSoft }}>{l}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div
              style={{
                background: C.cream,
                border: `1px solid ${C.line}`,
                borderRadius: 22,
                padding: 32,
                boxShadow: "0 20px 50px -25px rgba(21,46,29,0.35)",
              }}
            >
              <p style={{ fontSize: 16, lineHeight: 1.75, color: C.inkSoft, margin: 0 }}>
                NutriMori merupakan media edukasi digital yang dikembangkan oleh KKN TIM II Universitas Diponegoro
                Desa Jaten sebagai sarana penyebaran informasi mengenai pemanfaatan daun kelor menjadi pangan
                bergizi.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: C.inkSoft, marginTop: 14 }}>
                Website ini mendukung kegiatan sosialisasi, meningkatkan literasi gizi masyarakat, serta
                memperkenalkan inovasi olahan daun kelor yang mudah diterapkan dalam kehidupan sehari-hari — dapat
                diakses kapan saja hanya dengan memindai QR code pada leaflet.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyKelor() {
  const items = [
    {
      icon: (
        <path d="M12 21s-7-4.5-9-9c-1.5-3.5 1-7 4.5-7 2 0 3.5 1 4.5 2.5C13 6 14.5 5 16.5 5c3.5 0 6 3.5 4.5 7-2 4.5-9 9-9 9z" />
      ),
      title: "Hak anak atas gizi",
      body: "Dijamin dalam UUD NRI 1945, UU No. 35/2014 tentang Perlindungan Anak, dan UU No. 17/2023 tentang Kesehatan.",
    },
    {
      icon: <><path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="9" /></>,
      title: "Mencegah stunting",
      body: "Pemenuhan gizi yang baik meningkatkan daya tahan tubuh, mendukung pertumbuhan, dan mencegah stunting sejak dini.",
    },
    {
      icon: <path d="M4 21c8 0 12-6 12-14 0-1 0-2-1-3-1 2-3 3-5 3C6 7 4 10 4 14c0 2 0 5 0 7z" />,
      title: "Pangan lokal, mudah didapat",
      body: "Daun kelor tumbuh subur di lingkungan sekitar dan mudah diolah menjadi hidangan bergizi sehari-hari.",
    },
  ];
  return (
    <section id="kelor" style={{ padding: "84px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <Reveal>
            <div
              style={{
                borderRadius: 22,
                overflow: "hidden",
                boxShadow: "0 20px 50px -25px rgba(21,46,29,0.35)",
                position: "sticky",
                top: 96,
              }}
            >
              <img src={leafImg} alt="Rimbunan daun kelor" style={{ width: "100%", objectFit: "cover", aspectRatio: "3/4" }} />
            </div>
          </Reveal>
          <div>
            <Eyebrow>Mengenal Daun Kelor</Eyebrow>
            <Reveal>
              <h2
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 600,
                  fontSize: "clamp(28px,3.6vw,38px)",
                  lineHeight: 1.08,
                  color: C.forest,
                  margin: 0,
                }}
              >
                Discover the Goodness
                <br />
                of Moringa Oleifera
              </h2>
            </Reveal>
            <Reveal>
              <p
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: 22,
                  lineHeight: 1.5,
                  color: C.forest,
                  borderLeft: `3px solid ${C.moringa}`,
                  paddingLeft: 20,
                  margin: "28px 0",
                }}
              >
                "Daun kelor dikenal sebagai The Miracle Tree karena kandungan gizinya yang beragam, dan telah lama
                dimanfaatkan sebagai bahan pangan di berbagai negara."
              </p>
            </Reveal>
            <Reveal>
              <div className="grid gap-3.5">
                {items.map((it) => (
                  <div
                    key={it.title}
                    className="flex gap-4 items-start"
                    style={{
                      padding: "18px 20px",
                      background: C.cream,
                      border: `1px solid ${C.line}`,
                      borderRadius: 16,
                    }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={C.leaf}
                      strokeWidth="1.7"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    >
                      {it.icon}
                    </svg>
                    <div>
                      <h3 style={{ fontSize: 16.5, marginBottom: 4, fontFamily: FONT_BODY, fontWeight: 700, color: C.ink }}>
                        {it.title}
                      </h3>
                      <p style={{ margin: 0, fontSize: 14, color: C.inkSoft, lineHeight: 1.6 }}>{it.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <AboutIntro />
      <WhyKelor />
    </>
  );
}
