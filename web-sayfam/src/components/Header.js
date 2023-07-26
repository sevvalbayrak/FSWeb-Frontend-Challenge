import React from "react";
import { Link } from "react-scroll";

export default function Header({ language }) {
  return (
    <div className="contaier">
      <div className="headerContainer">
        <img src="SB.png" className="logoSevval" />
        <div className="nav">
          {language === "en" ? (
            <Link to="skillsScroll" smooth={true} duration={500}>
              <h5>Skills</h5>
            </Link>
          ) : (
            <Link to="skillsScroll" smooth={true} duration={500}>
              <h5>Yetenekler</h5>
            </Link>
          )}
          {language === "en" ? (
            <Link to="projectsScroll" smooth={true} duration={500}>
              <h5>Projects</h5>
            </Link>
          ) : (
            <Link to="projectsScroll" smooth={true} duration={500}>
              <h5>Projeler</h5>
            </Link>
          )}
          {language === "en" ? (
            <Link to="contactScroll" smooth={true} duration={500}>
              <h4 className="background">Contact Me</h4>
            </Link>
          ) : (
            <Link to="contactScroll" smooth={true} duration={1000}>
              <h4 className="background">Bana Ulaşın</h4>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
