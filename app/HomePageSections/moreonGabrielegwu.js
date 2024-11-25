import classes from "./moreOnDeveloper.module.css";
import { GrFormCheckmark } from "react-icons/gr";

export default function MoreOnDeveloper() {
  const moreOnDeveloper = {
    // caption: "Connect with Me",
    caption: "What I stand for",
    heading: "Elevate Your Digital Presence with Professional Web Development",
    articles: [
      {
        title: "Customized Solutions",
        content:
          "I craft web applications that align perfectly with your business needs, ensuring every feature serves a purpose.",
      },
      {
        title: "Seamless Integration",
        content:
          "Integrate smoothly with third-party services and APIs to enhance functionality and streamline operations.",
      },
      {
        title: "Performance Optimization",
        content:
          "Benefit from efficient code and scalable architecture that keeps your application fast and responsive.",
      },
      {
        title: "User-Focused Design",
        content:
          "Create intuitive interfaces that prioritize user experience and ensure easy navigation across devices.",
      },
      {
        title: "Security Assurance",
        content:
          "Implement robust security practices to safeguard your application and protect user data.",
      },
      {
        title: "Ongoing Support",
        content:
          "Receive consistent support and maintenance, ensuring your application remains up-to-date and reliable.",
      },
    ],
  };

  return (
    <main className={classes.background}>
      <div className={classes.moreOnDeveloper}>
        <div className={classes.header}>
          <p>{moreOnDeveloper.caption}</p>
          <h1>{moreOnDeveloper.heading}</h1>
        </div>
        <ul className={classes.moreOnDeveloperContents}>
          {moreOnDeveloper.articles.map((article) => {
            return (
              <li key={article.title}>
                <div className={classes.marker}>
                  <h1>
                    <GrFormCheckmark />
                  </h1>
                </div>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
