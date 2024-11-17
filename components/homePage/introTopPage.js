"use client";
import { useEffect, useState } from "react";
import classes from "./introTopPage.module.css";
import CtaButton from "../buttons/ctabuttonlink";

export default function IntroPageTop() {
  const allServiceList = [
    {
      title: "Asset and Facility Management",
      image: "/images/homepage/assets.jpg",
      position: "left",
      slidePosition: "bottom",
      message:
        "gabrielegwu Real estate and asset services provides you with premium accomodation, here in United Kingdom. Short and Long letting, pioneering and mentorship training to venuture into real estate and buying a property/asset in United Kingdom",
      cta: "View Details",
      ctaLink: "/services/asset-and-facility-management",
    },
    {
      title: "Project Management Services",
      image: "/images/homepage/project.jpg",
      position: "right",
      slidePosition: "right",
      message:
        "Specialized project management training courses designed to equip professionals with essential skills and tools for successful project delivery.",
      cta: "Explore",
      ctaLink: "/services/project-management-services-services",
    },
    {
      title: "Web Technology Services",
      image: "/images/homepage/software.png",
      position: "left",
      slidePosition: "top",

      message:
        "Web Application Development and training, Software Solutions, Mobile Application Development, Business Data analytics services, Project Management",
      cta: "Make Enquiry",
      ctaLink: "/services/software-technology-services",
    },
    {
      title: "Training Services",
      image: "/images/homepage/learning.jpeg",
      position: "right",
      slidePosition: "left",
      message:
        "Training and Human Development, Entrepreneurship Mentoring, Data analytics tranining, Code camp, web development, Advocacy, Graduate Internship Programme, Graduate Advancement Programme",
      cta: "View Details",
      ctaLink: "/services/training-and-human-development",
    },
    {
      title: "Business Data Analytics Services",
      image: "/images/homepage/data.jpg",
      position: "left",
      slidePosition: "bottom",
      message:
        "Unlock the full potential of your data with our expert solutions, designed to drive informed decision-making and foster business growth.",
      cta: "Use our Services",
      ctaLink: "/services/business-data-analytics",
    },
    {
      title: "Energy Support Services",
      image: "/images/homepage/biogas.jpg",
      position: "right",
      slidePosition: "top",
      message:
        "Biogas Production and Services, Procurement Services, Construction Management Services, Fabrication & Installation Services",
      cta: "Use our Services",
      ctaLink: "/services/energy-support-services",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlideWidth, setCurrentSlideWidth] = useState(0);

  useEffect(() => {
    let startTime = Date.now();
    const deviceWidth = window.innerWidth;
    const slideDuration = 7000;
    const progressInterval = setInterval(() => {
      const elaspedTime = Date.now() - startTime;
      const newWidth = (elaspedTime / slideDuration) * deviceWidth;
      if (elaspedTime < slideDuration) {
        setCurrentSlideWidth(newWidth);
      } else {
        setCurrentSlideWidth(deviceWidth);
        startTime = Date.now();
      }
    }, 10);

    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === allServiceList.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex, allServiceList.length]);
  return (
    <div className={classes.introTopPage}>
      <div
        style={{
          height: "2px",
          width: `${currentSlideWidth}px`,
          marginRight: "auto",
          backgroundColor: "var(--foreground)",
        }}
      ></div>
      {allServiceList.map((service, index) => {
        return (
          currentIndex === index && (
            <div
              key={index}
              className={`${classes.serviceComponent}
                ${
                  service.slidePosition === "bottom"
                    ? classes.componentSlideInBottom
                    : ""
                } ${
                service.slidePosition === "top"
                  ? classes.componentSlideInTop
                  : ""
              } ${
                service.slidePosition === "right"
                  ? classes.componentSlideInRight
                  : ""
              }${
                service.slidePosition === "left"
                  ? classes.componentSlideInLeft
                  : ""
              }`}
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className={classes.outerServiceComponent}>
                <div
                  className={classes.innerServiceComponent}
                  style={{
                    margin: `${
                      service.position === "right" ? "0 0 0 auto" : "0 auto 0 0"
                    }`,
                  }}
                >
                  <h2 className={classes.serviceTitle}>{service.title}</h2>
                  <p className={classes.serviceMessage}>{service.message}</p>
                  <div className={classes.serviceCtaLink}>
                    <CtaButton
                      action={service.ctaLink}
                      design="raised"
                      type="link"
                    >
                      {service.cta}
                    </CtaButton>
                  </div>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}
