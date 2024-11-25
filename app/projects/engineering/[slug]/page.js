// app/engineering-projects/[slug]/page.js
"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EngineeringProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const [project, setProject] = useState(null);

  useEffect(() => {
    if (slug) {
      // Here, you would fetch the project data using the slug
      // For simplicity, let's assume the projects data is available as a static array
      const projectData = [
        {
          slug: "project-1",
          title: "Project 1",
          description: "This is the detailed description of Project 1.",
          imageUrl: "/images/social2.jpg",
          projectLink: "https://example.com/project1",
          additionalLink: "https://example.com/project1-info",
        },
        {
          slug: "project-2",
          title: "Project 2",
          description: "This is the detailed description of Project 2.",
          imageUrl: "/images/social2.jpg",
          projectLink: "https://example.com/project2",
          additionalLink: "https://example.com/project2-info",
        },
      ];

      const foundProject = projectData.find((project) => project.slug === slug);
      setProject(foundProject);
    }
  }, [slug]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="projectDetailPage">
      <h1 className="projectTitle">{project.title}</h1>
      <div className="projectDetailContent">
        <div className="projectDetailImageWrapper">
          <Image
            src={project.imageUrl}
            alt={project.title}
            className="projectDetailImage"
            width={500}
            height={300}
          />
        </div>
        <div className="projectDetailInfo">
          <p className="projectDescription">{project.description}</p>
          <div className="projectLinks">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
            {project.additionalLink && (
              <a
                href={project.additionalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                More Info
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
