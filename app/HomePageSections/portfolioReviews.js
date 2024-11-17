"use client";
import classes from "./portfolioReviews.module.css";
import { FaQuoteRight } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Reviews() {
  const professionalReviews = {
    caption: "Endorsed",
    heading: "Testimonials From Clients & Collaborators",
    articles: [
      {
        name: "John L.",
        review:
          "Gabriel delivered an exceptional web application for our team, streamlining our processes and boosting efficiency. His expertise in Node.js and React was evident throughout the project.",
      },
      {
        name: "Michelle E.",
        review:
          "Working with Gabriel on a data-driven project was a game changer. His attention to detail and problem-solving skills were instrumental in achieving our business goals.",
      },
      {
        name: "Richard D.",
        review:
          "Gabriel's leadership in managing engineering projects stood out. He consistently met deadlines while maintaining a high standard of quality and collaboration.",
      },
      {
        name: "Anthony M.",
        review:
          "His full-stack capabilities brought our product vision to life. From backend APIs to sleek frontend designs, Gabriel exceeded our expectations every step of the way.",
      },
      {
        name: "Christian I.",
        review:
          "Gabriel's expertise in engineering management helped our team adopt sustainable practices. His work on lifecycle assessment tools significantly reduced our environmental impact.",
      },
    ],
  };

  const [reviews, setReviews] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    function resizeWindowFunction() {
      if (window.outerWidth <= 799) {
        setReviews(1);
      } else {
        setReviews(3);
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", resizeWindowFunction);
      resizeWindowFunction(); // Set initial state based on window size
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", resizeWindowFunction);
      }
    };
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setStartIndex(
        (prevIndex) => (prevIndex + 1) % professionalReviews.articles.length
      );
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [startIndex, professionalReviews.articles.length]);

  const endIndex = (startIndex + reviews) % professionalReviews.articles.length;
  const displayedReviews =
    endIndex > startIndex
      ? professionalReviews.articles.slice(startIndex, endIndex)
      : [
          ...professionalReviews.articles.slice(startIndex),
          ...professionalReviews.articles.slice(0, endIndex),
        ];

  return (
    <main className={classes.background}>
      <div className={classes.portfolioReviews}>
        <div className={classes.header}>
          <p>{professionalReviews.caption}</p>
          <h1>{professionalReviews.heading}</h1>
        </div>
        <ul className={classes.portfolioReviewsContent}>
          {displayedReviews.map((article) => (
            <li
              key={article.name}
              className={
                displayedReviews.includes(article)
                  ? classes.partOfActive
                  : classes.notPartOfActive
              }
            >
              <div>
                <h3 className={classes.reviewStar}>★★★★★</h3>
                <p>{article.review}</p>
              </div>
              <div className={classes.reviewMarker}>
                <p>{article.name}</p>
                <h1>
                  <FaQuoteRight />
                </h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
