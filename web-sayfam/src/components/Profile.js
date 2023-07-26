import React from "react";

export default function Profile({ language }) {
  return (
    <div className="profileContainer">
      <div className="profile">
        <div className="profile-infoCol">
          {language === "en" ? (
            <h1 className="profile-heading">Profile</h1>
          ) : (
            <h1 className="profile-heading">Profil</h1>
          )}
          <div></div>
          <div className="profile-infoText">
            <div className="profile-box">
              <div className="right">
                <h3 className="content-heading">Profile</h3>
                <div className="two-part">
                  <div className="keys">
                    {language === "en" ? (
                      <p>Birth Date</p>
                    ) : (
                      <p>Doğum Tarihi</p>
                    )}
                    {language === "en" ? <p>City</p> : <p>Şehir</p>}
                    {language === "en" ? (
                      <p>Education Status</p>
                    ) : (
                      <p>Eğitim Durumu</p>
                    )}
                    <br />
                    <br />
                    {language === "en" ? <p>Position</p> : <p>Pozisyon</p>}
                  </div>
                  <div className="values">
                    {" "}
                    <p>13.07.1995</p>
                    <p>Istanbul</p>
                    {language === "en" ? (
                      <p>
                        Manisa Celal Bayar University, Civil Engineering,2020
                      </p>
                    ) : (
                      <p>
                        Manisa Celal Bayar Üniversitesi,İnşaat Mühendisliği,2020
                      </p>
                    )}
                    <p>Frondend Developer,UI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-box">
              {language === "en" ? (
                <h3 className="content-heading">About Me</h3>
              ) : (
                <h3 className="content-heading">Hakkımda</h3>
              )}
              {language === "en" ? (
                <p className="aboutMeText">
                  I graduated from civil engineering department in 2020. In
                  2021, I worked as civil engineer in a construction company for
                  a short time. When I couldn't find a job in my place due to
                  the city change, I realized that I wanted to move to another
                  field and that the working conditions of civil engineering
                  were not suitable for me. I realized that I wanted to make
                  software, that I wanted to produce. I was accepted to the Full
                  Stack Web Developer training program of the Workintech
                  educational institution. There are 1000 hours of lectures and
                  nearly 50 projects in this program. This tutorial has helped
                  me a lot. Some of those; my problem solving ability, teamwork,
                  agile methodologies, object-oriented programming,
                  front-end-back-end, javascript, HTML/CSS, ,Github... Now I
                  know that learning other programming languages ​​is not
                  difficult and I continue to improve myself.
                </p>
              ) : (
                <p>
                  2020 yılında inşaat mühendisliği bölümünden mezun oldum. 2021
                  yılında kısa bir süre bir inşaat firmasında inşaat mühendisi
                  olarak çalıştım. Şehir değişikliğinden dolayı bulunduğum yerde
                  iş bulamayınca başka bir alana geçmek istediğimi , inşaat
                  mühendisliğinin çalışma şartlarının bana uygun olmadığını
                  anladım. Yazılım yapmak istediğimi, üretmek istediğimi fark
                  ettim. Workintech eğitim kurumunun Full Stack Web Developer
                  eğitim programına kabul edildim. Bu programda 1000 saat ders
                  ve 50'ye yakın proje bulunmaktadır. Bu eğitim bana çok
                  yardımcı oldu. Bunlardan bazıları; problem çözme yeteneğim,
                  ekip çalışması, çevik metodolojiler, nesne yönelimli
                  programlama, ön uç-arka uç, javascript, HTML/CSS, ,Github...
                  Artık diğer programlama dillerini öğrenmenin zor olmadığını
                  biliyorum ve kendimi geliştirmeye devam ediyorum.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
