import React from "react";

const skillsData = [
  {
    name: "JavaScript",
    description:
      "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
  },
  {
    name: "React.Js",
    description:
      "React.js is a popReact (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.ular open-source JavaScript library used for building user interfaces (UIs). It allows developers to create reusable UI components.",
  },

  {
    name: "CSS",
    description:
      "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML).",
  },
  {
    name: "Redux",
    description:
      "Redux is a predictable state management library for JavaScript applications. It allows developers to manage the application state in a centralized store, making it easy to maintain, debug and test the state of complex applications.",
  },
];

const skillsDataTr = [
  {
    name: "JavaScript",
    description:
      "JavaScript, dinamik olarak güncellenen içerik oluşturmanıza, multimedyayı kontrol etmenize, görüntüleri canlandırmanıza ve hemen hemen her şeye olanak sağlayan bir betik dilidir.",
  },
  {
    name: "React.Js",
    description:
      "React.js, bir popReact'tir (React.js veya ReactJS olarak da bilinir), bileşenlere dayalı kullanıcı arayüzleri oluşturmak için ücretsiz ve açık kaynaklı bir ön uç JavaScript kitaplığıdır. Meta (eski adıyla Facebook) ve bir topluluk tarafından sürdürülür. kullanıcı arabirimleri (UI'ler) oluşturmak için kullanılan bireysel geliştiriciler ve company.ular açık kaynaklı JavaScript kitaplığı. Geliştiricilerin yeniden kullanılabilir UI bileşenleri oluşturmasına olanak tanır.",
  },

  {
    name: "CSS",
    description:
      "Sayfaları (CSS), HTML veya XML'de (SVG, MathML veya XHTML gibi XML lehçeleri dahil) yazılmış bir belgenin sunumunu tanımlamak için kullanılan bir stil sayfası dilidir.",
  },
  {
    name: "Redux",
    description:
      "Redux, JavaScript uygulamaları için öngörülebilir bir durum yönetimi kitaplığıdır. Geliştiricilerin uygulama durumunu merkezi bir mağazada yönetmesine olanak tanıyarak karmaşık uygulamaların durumunu korumayı, hata ayıklamayı ve test etmeyi kolaylaştırır.",
  },
];

export default function Skills({ language }) {
  return language === "en" ? (
    <div className="skillsContainer">
      <div className="skillsContent">
        <h3 className="heading-list">Skills</h3>
        <div className="skills">
          {skillsData.map((skill) => (
            <div className="list" key={skill.name}>
              <div className="skill-heading">
                <div className="skill-list">
                  <div className="js">
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="skillsContainer">
      <div className="skillsContent">
        <h3 className="heading-list">Yetenekler</h3>
        <div className="skills">
          {skillsDataTr.map((skill) => (
            <div className="list" key={skill.name}>
              <div className="skill-heading">
                <div className="skill-list">
                  <div className="js">
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
