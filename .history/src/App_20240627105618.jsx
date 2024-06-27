import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      <a href="https://web.whatsapp.com/send/?phone=201270644733&text&type=phone_number&app_absent=0" id="whatsapp-b"
        target="_blank" rel="noreferrer">
        <img src="../" className="whats-img" />
      </a>
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <button
        style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }}
        className="icon-keyboard_arrow_up scroll2Top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Up
      </button>
    </div>
  );
}

export default App;
