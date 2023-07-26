import React from "react";
import { Link } from "react-scroll";

export default function Hero({ language }) {
  return (
    <div className="heroContainer">
      <div className="hero">
        <div className="hero-left">
          <div className="name">
            <div className="lineWithName">
              <h5 className="name-line">___________</h5>
              <h5>Şevval Bayrak</h5>
            </div>
          </div>
          {language === "en" ? (
            <h1 className="heading">
              Creative thinker <br />
              Minimalism lover
            </h1>
          ) : (
            <h1 className="heading">
              Yaratıcı Düşünür <br />
              Minimalist Sever
            </h1>
          )}
          {language === "en" ? (
            <p className="intro">
              Hi, I’m Sevval! I’m a full-stack developer. If you are looking for
              a Developer who to craft solid and scalable frontend products with
              great user experiences. Let’s shake hands with me 🤝
            </p>
          ) : (
            <p className="intro">
              Merhaba, ben Şevval! Ben bir full-stack geliştiricisiyim. Mükemmel
              kullanıcı deneyimleriyle sağlam ve ölçeklenebilir ön uç ürünleri
              oluşturacak bir geliştirici arıyorsanız. Benimle el sıkışın 🤝
            </p>
          )}
          <div className="buttons">
            <div className="hire-button">
              <Link to="contactScroll" smooth={true} duration={1500}>
                {language === "en" ? (
                  <p className="whiteText">Contact</p>
                ) : (
                  <p className="whiteText">İletişim</p>
                )}
              </Link>
            </div>
            <div className="github-button">
              <img src="github.png" alt="github" className="logoBio" />{" "}
              <a
                href="https://github.com/sevvalbayrak"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            <div className="linkedin-button">
              <img src="LinkedIn.png" alt="linkedin" className="logoBio" />
              <a
                href="https://www.linkedin.com/in/%C5%9Fevval-bayrak-59b540102/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <img className="bio-image" src="sevval.jpeg" alt="profile" />
      </div>
    </div>
  );
}
