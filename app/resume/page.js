import React from "react";
import Link from "next/link";
import styles from "./resumePage.module.css"; // Importing the CSS module for styling

export const metadata = {
  title: "Resume | Gabriel Egwu",
  description:
    "Explore Gabriel Egwu's professional resume, detailing his experience, skills, and career journey as a Full-Stack Developer and Engineering Manager.",
};

const ResumePage = ({ filter }) => {
  // Array for sections on the Resume Page
  const resumeSections = [
    {
      title: "Experience",
      description:
        "Explore the roles I have held in various organizations, and learn more about my contributions.",
      link: "/resume/experience",
    },
    {
      title: "Skills",
      description:
        "Discover the technical and soft skills that define my work.",
      link: "/resume/skills",
    },
    {
      title: "Technology",
      description: "Learn more about the technologies I specialize in.",
      link: "/resume/technology",
    },

    {
      title: "Aspiration",
      description: "Learn about my career goals and aspirations.",
      link: "/resume/aspirations",
    },
    {
      title: "Organisations",
      description:
        "Find out about the organisations I have worked with and currently working with.",
      link: "/resume/organisations",
    },
    {
      title: "Download Resume",
      description: "Get a detailed PDF version of my resume.",
      link: "/resume/Gabriel_Egwu_Resume.pdf",
      download: true, // Flag to indicate this section should trigger a download
    },
  ];

  if (filter) {
    const resumeFilter = resumeSections.filter(
      (resume) =>
        !resume.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return (
      <main className="viewMoreListContainer">
        <h3
          className={styles.title}
          style={{ textAlign: "left", fontSize: "1.8rem" }}
        >
          Explore More{" "}
        </h3>
        <p style={{ textAlign: "left" }}>
          Explore more of my resume. Click on a category to dive deeper!
        </p>
        <ul className="viewMoreLists">
          {resumeFilter.map((resume, index) => (
            <li key={index}>
              {resume.download ? (
                <Link href={resume.link} target="_blank" download>
                  {resume.title}
                </Link>
              ) : (
                <Link href={resume.link}>{resume.title}</Link>
              )}
            </li>
          ))}
        </ul>
        {/* <ul
          className={styles.categories}
          style={{
            marginRight: "auto",
            marginLeft: "-2rem",
            display: "flex",
            flexDirection: "row",
            gap: "0rem",
            justifyItems: "left",
            flexWrap: "wrap",
          }}
        >
          {resumeFilter?.length > 0 &&
            resumeFilter.map((project, index) => (
              <li
                key={index}
                className={styles.categoryItem}
                style={{
                  width: "300px",
                  padding: "0rem 2rem",
                  // marginLeft: "-2rem",
                  marginBottom: "1rem",
                }}
              >
                <Link href={project.link} className={styles.category}>
                  {project.title}
                </Link>
              </li>
            ))}
        </ul> */}
      </main>
    );
  } else {
    return (
      <main className={styles.resumePage}>
        <h1 className={styles.title}>Resume Overview</h1>
        <p className={styles.introduction}>
          Welcome to my professional portfolio! Here you&apos;ll find an
          overview of my skills, experience, and career goals. Feel free to
          explore each section to get to know more about my journey and the
          projects I&apos;ve worked on.
        </p>

        <div className={styles.sections}>
          {resumeSections.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.sectionDescription}>{section.description}</p>
              {section.download ? (
                <Link
                  href={section.link}
                  target="_blank"
                  className={styles.link}
                  download
                >
                  Download Resume
                </Link>
              ) : (
                <Link href={section.link} className={styles.link}>
                  View
                </Link>
              )}
            </div>
          ))}
        </div>
      </main>
    );
  }
};

export default ResumePage;
