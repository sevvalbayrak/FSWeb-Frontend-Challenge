import { useState, useEffect } from "react";

export default function ModeSwitch({
  language,
  handleLanguageChange,
  setDarkMode,
}) {
  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (theme == true) {
      document.body.classList.add("dark");
      setDarkMode(true);
    } else {
      document.body.classList.remove("dark");
      setDarkMode(false);
    }
  }, [theme]);

  return (
    <div className="modeSwitch">
      <div className="mode">
        <label className="switch">
          <input type="checkbox" onClick={handleClick} />
          <span className="slider round"></span>
        </label>
        <div className="modeText">{theme ? "Dark Mode" : "Light Mode"}</div>
        <div className="modeText">|</div>
        <div className="modeText">
          {language === "en" ? (
            <span id="lang" onClick={handleLanguageChange}>
              TURKISH
            </span>
          ) : (
            <span id="lang" onClick={handleLanguageChange}>
              ENGLISH
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
