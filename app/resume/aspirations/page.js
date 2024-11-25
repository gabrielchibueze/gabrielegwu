import React from "react";
import styles from "./classes.module.css"; // Importing the CSS module for styling
import ResumePage from "../page";

export const metadata = {
  title: "Aspirations | Gabriel Egwu",
  description:
    "Learn about Gabriel Egwu's career aspirations, short-term and long-term goals in software development and engineering management.",
};

export default function AspirationPage() {
  const aspirations = [
    {
      title: "Innovating Sustainable Solutions",
      description:
        "Leverage technology to develop environmentally sustainable products and systems, contributing to a greener future through efficient web and engineering solutions.",
    },
    {
      title: "Mastering Emerging Technologies",
      description:
        "Stay ahead of the curve by continuously learning and integrating the latest technologies like AI, blockchain, and IoT into full-stack development projects.",
    },
    {
      title: "Empowering Communities Through Technology",
      description:
        "Create impactful applications that solve real-world problems, particularly in underserved markets like Africa, enhancing accessibility and improving lives.",
    },
    {
      title: "Leadership in Engineering Management",
      description:
        "Aspire to lead cross-functional teams, driving innovation and fostering a culture of collaboration, excellence, and continuous improvement.",
    },
    {
      title: "Building Scalable Platforms",
      description:
        "Design and develop scalable web platforms that handle complex functionalities while maintaining top-tier performance, security, and user experience.",
    },
    {
      title: "Contributing to Open Source",
      description:
        "Give back to the developer community by contributing to open-source projects, sharing knowledge, and mentoring aspiring developers.",
    },
  ];

  return (
    <main className={styles.aspirationPage}>
      <h1 className={styles.title}>My Professional Aspirations</h1>
      <p className={styles.introduction}>
        My journey as a developer and engineer is driven by a passion for
        innovation, sustainability, and impactful technology. Here’s where I aim
        to make a difference:
      </p>

      <div className={styles.aspirationContainer}>
        {aspirations.map((aspiration, index) => (
          <div key={index} className={styles.aspirationCard}>
            <h2 className={styles.aspirationTitle}>{aspiration.title}</h2>
            <p className={styles.aspirationDescription}>
              {aspiration.description}
            </p>
          </div>
        ))}
        <section className="projectExplore">
          <ResumePage filter="aspirations" />
        </section>
      </div>
    </main>
  );
}
