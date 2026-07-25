import { C, FONT_DISPLAY } from "../utils/theme";

export default function Footer() {
  return (
    <footer id="kontak" style={{ background: C.forest, color: "rgba(255,255,255,0.75)", paddingTop: 70 }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <div
          className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10"
          style={{ paddingBottom: 44, borderBottom: "1px solid rgba(255,255,255,0.12)" }}
        >
          <div>
            <h3 style={{ color: "#fff", fontSize: 19, fontFamily: FONT_DISPLAY, fontWeight: 600, margin: 0 }}>NutriMori</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, marginTop: 10 }}>
              Media edukasi digital tentang pemanfaatan daun kelor sebagai pangan bergizi, dikembangkan oleh KKN TIM
              II UNDIP 2026 Desa Jaten.
            </p>
            <div className="flex gap-3.5 items-center" style={{ marginTop: 8 }}>
              {["UNDIP", "KKN"].map((t) => (
                <div
                  key={t}
                  className="flex items-center justify-center"
                  style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.08)", fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: 16, color: "#fff", fontFamily: FONT_DISPLAY, fontWeight: 600, margin: 0 }}>Jelajahi</h3>
            <ul className="grid gap-3 list-none m-0 p-0" style={{ marginTop: 16 }}>
              {[
                ["/about", "Tentang NutriMori"],
                ["/#gizi", "Kandungan Gizi"],
                ["/recipe", "Resep Puding"],
                ["/#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href} style={{ fontSize: 14 }}>
                  <a href={href} style={{ color: "inherit", textDecoration: "none" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: 16, color: "#fff", fontFamily: FONT_DISPLAY, fontWeight: 600, margin: 0 }}>Kontak Tim KKN</h3>
            <ul className="grid gap-3 list-none m-0 p-0" style={{ marginTop: 16 }}>
              <li className="flex items-center gap-2.5" style={{ fontSize: 14 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.moringaLight} strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
                @kkndesajaten_undip
              </li>
              <li className="flex items-center gap-2.5" style={{ fontSize: 14 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.moringaLight} strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                @kknjatenundip
              </li>
              <li className="flex items-center gap-2.5" style={{ fontSize: 14 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.moringaLight} strokeWidth="1.6">
                  <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Desa Jaten, Jawa Tengah
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-2.5" style={{ padding: "22px 0 30px", fontSize: 12.5, color: "rgba(255,255,255,0.5)" }}>
          <span>© 2026 NutriMori — KKN TIM II UNDIP Desa Jaten</span>
          <span>dibuat dengan kepedulian untuk gizi anak Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
