import { useState } from "react";
import { C, FONT_DISPLAY, FONT_MONO } from "../utils/theme";
import { Eyebrow } from "./Shared";
import { Reveal } from "../hooks/useReveal";
import { YOUTUBE_VIDEO_ID, VIDEO_TITLE, VIDEO_DESCRIPTION } from "../data/video";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;

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
                background: playing ? "#000" : `#0F2216 url(${thumbnail}) center/cover no-repeat`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                margin: 14,
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              {playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                  title={VIDEO_TITLE}
                  allow="accelerate-compute; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", border: "none" }}
                />
              ) : (
                <>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(124,170,92,0.25), transparent 60%), rgba(15,34,22,0.35)",
                    }}
                  />
                  <button
                    aria-label="Putar video tutorial"
                    onClick={() => setPlaying(true)}
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
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#22280F" style={{ marginLeft: 3 }}>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            <div style={{ padding: "28px 32px" }}>
              <h3 style={{ color: "#fff", fontSize: 21, fontFamily: FONT_DISPLAY, fontWeight: 600, margin: 0 }}>
                {VIDEO_TITLE}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginTop: 10, lineHeight: 1.6 }}>
                {VIDEO_DESCRIPTION}
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
