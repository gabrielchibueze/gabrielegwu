import React from "react";
import Link from "next/link";
import styles from "./classes.module.css"; // Import the CSS module
import CtaButton from "@/components/buttons/ctabuttonlink";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ProjectsPage from "../page";
import Image from "next/image";

export const metadata = {
  title: "Engineering Projects | Gabriel Egwu",
  description:
    "View engineering projects by Gabriel Egwu, highlighting experience in mechanical engineering, project management, and sustainable development initiatives.",
};

const engineeringProjects = [
  {
    title: "Green Hydrogen Transport Project",
    description:
      "A project focused on integrating green hydrogen fuel cell technology into the UK transport sector. The aim is to reduce greenhouse emissions by replacing diesel buses with green hydrogen fuel (GHF).",
    slug: "green-hydrogen-transport-project",
    image: "/images/social2.jpg",
  },
  {
    title: "Rezon Halo Head Band",
    description:
      "Life cycle assessment of the Rezon Halo Head Band. The project involved using SimaPro and GaBi ThinkStep LCA software to evaluate the environmental impacts associated with the product.",
    slug: "rezon-halo-head-band",
    image: "/images/social2.jpg",
  },
  {
    title: "Escrow Platform - XMARR",
    description:
      "XMARR is an escrow platform designed to establish trust in online transactions targeting Nigerian and African markets. Key features include escrow services, user verification, and dispute resolution.",
    slug: "escrow-platform-xmarr",
    image: "/images/social2.jpg",
  },
  {
    title: "Mobile Barber Services Platform - Hairsby",
    description:
      "The Hairsby project involves building a platform (app and web) for seamless booking and management of mobile barber services. Features include stylist requests, verified barber profiles, and loyalty rewards.",
    slug: "mobile-barber-services-hairsby",
    image: "/images/social2.jpg",
  },
];

const EngineeringProjectsPage = () => {
  return (
    <main className={styles.engineeringProjectsPage}>
      <h1 className={styles.title}>Engineering Projects</h1>
      <p className={styles.description}>
        Explore the innovative engineering projects I&apos;ve worked on,
        focusing on sustainable technologies and digital platforms.
      </p>

      <div className={styles.projectGrid}>
        {engineeringProjects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectImageWrapper}>
              {/* Optional: You can add an image here if desired */}
              <Image
                className={styles.projectImage}
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
              />
            </div>
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>
                <Link
                  href={`/engineering-projects/${project.slug}`}
                  className={styles.projectLink}
                >
                  {project.title}
                </Link>
              </h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className="projectLinks">
                <div>
                  <CtaButton
                    action={`/engineering-projects/${project.slug}`}
                    design="underlined"
                    type="link"
                  >
                    <div className="textWithIcon">
                      <span>View Project</span>
                      <h3>
                        <MdOutlineArrowRightAlt />
                      </h3>
                    </div>
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="projectExplore">
        <ProjectsPage filter="engineering" />
      </section>
    </main>
  );
};

export default EngineeringProjectsPage;
