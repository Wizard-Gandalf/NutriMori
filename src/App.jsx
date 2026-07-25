import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipe from "./pages/Recipe";
import { C, FONT_BODY } from "./utils/theme";

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          margin: 0,
          background: C.mint,
          color: C.ink,
          fontFamily: FONT_BODY,
          WebkitFontSmoothing: "antialiased",
          overflowX: "hidden",
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
