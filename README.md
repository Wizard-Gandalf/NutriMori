# NutriMori

Website edukasi daun kelor, KKN TIM II UNDIP 2026 — Desa Jaten. Dibangun dengan React + Vite + Tailwind CSS + React Router.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Struktur folder

```
src/
├── assets/            gambar (logo.png, hero.jpg, pudding.jpg)
├── components/         komponen UI yang dipakai ulang
│      Navbar.jsx
│      Hero.jsx
│      NutritionCard.jsx   (kartu gizi + grid)
│      RecipeCard.jsx      (tampilan resep: bahan, alat, langkah)
│      FAQ.jsx
│      Footer.jsx
│      Shared.jsx          (Eyebrow, Btn, VeinDivider — dipakai lintas komponen)
├── pages/               satu file per halaman/route
│      Home.jsx           (hero, kandungan gizi, video, unduh leaflet)
│      Recipe.jsx         (resep lengkap + tips + FAQ)
│      About.jsx          (tentang NutriMori + mengenal daun kelor)
├── data/
│      recipes.js         data resep, terpisah dari tampilan
├── hooks/
│      useReveal.jsx       hook + komponen scroll-reveal
├── utils/
│      theme.js            token warna & font terpusat
└── App.jsx              routing (react-router-dom) + layout global
```

## Catatan tentang gambar

`src/assets/hero.jpg`, `pudding.jpg`, dan `logo.png` saat ini adalah **placeholder** (blok warna polos) karena
file gambar asli tidak disertakan dalam kode sumber yang diberikan. Ganti ketiga file ini dengan foto asli
(daun kelor, puding, logo NutriMori) — nama file dan lokasi impor sudah disiapkan, jadi tinggal ditimpa.

## Deploy ke Vercel

Karena routing (`/`, `/about`, `/recipe`) ditangani di sisi browser oleh `react-router-dom`, Vercel perlu
diberitahu untuk selalu menyajikan `index.html` untuk semua path, bukan mencari file fisik bernama `recipe`
atau `about`. Ini sudah diatur lewat `vercel.json` di root project — jangan dihapus, kalau tidak halaman
`/recipe` dan `/about` akan 404 saat dibuka langsung atau di-refresh.

## Routing

- `/` — Beranda (Home)
- `/about` — Tentang & mengenal daun kelor
- `/recipe` — Resep puding daun kelor

Navbar menggunakan tautan hash (`/#gizi`, `/about#kelor`, dst.) untuk anchor di dalam masing-masing halaman.
