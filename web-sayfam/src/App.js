import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ModeSwitch from "./components/ModeSwitch";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("languageKey") || "en"
  );

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const handleLanguageChange = () => {
    if (language === "en") {
      setLanguage("tr");
      localStorage.setItem("languageKey", "tr");
    } else {
      setLanguage("en");
      localStorage.setItem("languageKey", "en");
    }
  };

  return (
    <>
      {loading ? (
        <div className="loader">
          <img src="SB.png" alt="logo" />
        </div>
      ) : (
        <div className="App">
          <ModeSwitch
            language={language}
            handleLanguageChange={handleLanguageChange}
            setDarkMode={setDarkMode}
          />
          <Header language={language} />
          <div id="skillsScroll"></div>
          <Hero language={language} />
          <Skills language={language} />
          <Profile language={language} />
          <div id="projectsScroll"></div>
          <Projects language={language} />
          <div id="contactScroll"></div>
          <Footer language={language} />
        </div>
      )}
    </>
  );
}

export default App;
