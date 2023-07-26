import React from "react";

const projectDataTr = [
  {
    projectName: "Pizza Sipariş",
    projectImg: "pizza.png",
    projectDescription:
      "Pizza Sipariş Projesi, React, React Router Dom, CSS ve  Yup ile oluşturulmuştur ve online pizza siparişi için kullanıcılara sorunsuz bir deneyim sunmayı hedeflemektedir. Kalite ve güvenilirlik için proje Cypress ile entegre edilmiştir.",
    projectProgrammes: ["react", "axios", "cypress"],
    projectUrl: "https://pizza-order-project.netlify.app/",
    gitHub: "https://github.com/sevvalbayrak/fsweb-s7-challenge-pizza",
  },
  {
    projectName: "Random Şakalar:)",
    projectImg: "joke.png",
    projectDescription:
      "Rastgele Şaka Projesi, React, React Router Dom, localStorage ve Toastify kütüphanesi kullanılarak geliştirilen keyifli bir uygulamadır. Bu proje, kullanıcılara etkileşimli ve eğlenceli rastgele şakalar sunarak eğlence getirmeyi amaçlamaktadır.",
    projectProgrammes: ["react", "localStorage", "toastify"],
    projectUrl: "https://jokes-project-blond.vercel.app/",
    gitHub: "https://github.com/sevvalbayrak/fsweb-s10g4-thunk-and-apis",
  },

  {
    projectName: "Minnet Günlüğü",
    projectImg: "diary.png",
    projectDescription:
      "Minnet Günlüğü Projesi, React, Redux Thunk ve Toastify ile geliştirilmiş motivasyonel bir uygulamadır.Bu proje, kullanıcılara ilham vermek için hazırlanmıştır, şükran zihniyeti geliştirmelerine ve pozitifliğin gücünden yararlanmalarına olanak tanır, platform sağlar.",
    projectProgrammes: ["react", "redux", "redux thunk"],
    projectUrl: "https://grateful-diary.vercel.app/",
    gitHub: "https://github.com/sevvalbayrak/fsweb-s10-challenge",
  },

  {
    projectName: "Film Listesi",
    projectImg: "filmlist.png",
    projectDescription:
      "Film Listesi Projesi, React, logger middleware ve Redux kullanılarak geliştirilen yenilikçi ve kullanıcı odaklı bir uygulamadır. Kullanıcı deneyimine odaklanır, film koleksiyonlarını etkili şekilde yönetmelerine ve keşfetmelerine olanak sağlayan kapsamlı ve sorunsuz bir platform sunmayı hedeflemektedir.",
    projectProgrammes: ["react", "axios", "middleware"],
    projectUrl: "https://redux-films.vercel.app/",
    gitHub: "https://github.com/sevvalbayrak/fsweb-s10g3-redux-watchlist",
  },
  {
    projectName: "Favori Filmler",
    projectImg: "films.png",
    projectDescription:
      "Favori Filmler Projesi, React, CRUD(create,read,update,delete) Operasyonları, localStorage ve axios ile geliştirilen etkileyici bir uygulamadır. Bu proje, kullanıcılara favori filmlerini kolaylıkla yönetmelerine ve keşfetmelerine olanak sağlayarak, kullanıcılara etkileyici ve keyifli bir deneyim sunmayı hedeflemektedir.",
    projectProgrammes: ["react", "CRUD", "axios"],
    projectUrl: "https://films-project.vercel.app/movies",
    gitHub: "https://github.com/sevvalbayrak/fsweb-s11g3-crud-filmler-1",
  },
];

const projectData = [
  {
    projectName: "Pizza Order",
    projectImg: "pizza.png",
    projectDescription:
      "Pizza Order Project: Created with React, React Router Dom, CSS, and React hook form, aims to provide a seamless user experience for ordering pizzas online.For quality and reliability, the project is integrated with Cypress.",
    projectProgrammes: ["react", "axios", "cypress"],
    projectUrl: "https://pizza-order-project.netlify.app/",
    gitHub: "https://github.com/sevvalbayrak/fsweb-s7-challenge-pizza",
  },
  {
    projectName: "Random Jokes:)",
    projectImg: "joke.png",
    projectDescription:
      "The Random Jokes Project is a delightful application developed using React, React Router Dom, localStorage, and the Toastify library. This project aims to entertain users with interactive and engaging random jokes, bringing laughter and amusement.",
    projectProgrammes: ["react", "localStorage", "toastify"],
    projectUrl: "https://jokes-project-blond.vercel.app/",
    gitHub: "https://github.com/sevvalbayrak/fsweb-s10g4-thunk-and-apis",
  },
  {
    projectName: "Favorite Movies",
    projectImg: "films.png",
    projectDescription:
      "The Favorite Movies Project is a captivating application developed with React, CRUD operations, localStorage, and axios. This project aims to provide users with an immersive and enjoyable experience by allowing them to manage and explore their favorite movies effortlessly.",
    projectProgrammes: ["react", "CRUD", "axios"],
    projectUrl: "https://films-project.vercel.app/movies",
    gitHub: "https://github.com/sevvalbayrak/fsweb-s11g3-crud-filmler",
  },
  {
    projectName: "Grateful Diary",
    projectImg: "diary.png",
    projectDescription:
      "The Grateful Diary Project is a motivational application developed with React, Redux Thunk, and Toastify library. This project is meticulously crafted to empower and inspire users, allowing them to cultivate a mindset of gratitude and harness the power of positivity by providing a purposeful platform to document.",
    projectProgrammes: ["react", "redux", "redux thunk"],
    projectUrl: "https://grateful-diary.vercel.app/",
    gitHub: "https://github.com/sevvalbayrak/fsweb-s10-challenge",
  },

  {
    projectName: "Film List",
    projectImg: "filmlist.png",
    projectDescription:
      "The Film List Project is an innovative and user-centric application developed using React, logger middleware, and Redux. With a primary focus on user experience, this project strives to provide a comprehensive and seamless platform that empowers users to effectively manage and explore their film collections.",
    projectProgrammes: ["react", "axios", "middleware"],
    projectUrl: "https://redux-films.vercel.app/",
    gitHub: "https://github.com/sevvalbayrak/fsweb-s10g3-redux-watchlist",
  },
];
export default function Projects({ language }) {
  return language === "en" ? (
    <div className="projectsContainer">
      <div className="projects">
        <div className="projectCol">
          <h1 className="profile-heading">Projects</h1>
          <div className="pro">
            {projectData.map((project) => (
              <div className="card">
                <img
                  src={project.projectImg}
                  alt="projects"
                  className="projectsPhotos"
                />
                <h3 className="content-heading">{project.projectName}</h3>
                <p className="description-project">
                  {project.projectDescription}
                </p>
                <div className="programs">
                  <p>{project.projectProgrammes[0]}</p>
                  <p>{project.projectProgrammes[1]}</p>
                  <p>{project.projectProgrammes[2]}</p>
                </div>
                <div className="links">
                  <a href={project.gitHub} target="_blank" rel="noreferrer">
                    Github
                  </a>
                  <a href={project.projectUrl} target="_blank" rel="noreferrer">
                    View Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="projectsContainer">
      <div className="projects">
        <div className="projectCol">
          <h1 className="profile-heading">Projeler</h1>
          <div className="pro">
            {projectDataTr.map((project) => (
              <div className="card">
                <img
                  src={project.projectImg}
                  alt="projects"
                  className="projectsPhotos"
                />
                <h3 className="content-heading">{project.projectName}</h3>
                <p className="description-project">
                  {project.projectDescription}
                </p>
                <div className="programs">
                  <p>{project.projectProgrammes[0]}</p>
                  <p>{project.projectProgrammes[1]}</p>
                  <p>{project.projectProgrammes[2]}</p>
                </div>
                <div className="links">
                  <a href={project.gitHub} target="_blank" rel="noreferrer">
                    Github
                  </a>
                  <a href={project.projectUrl} target="_blank" rel="noreferrer">
                    Siteyi Gör
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
