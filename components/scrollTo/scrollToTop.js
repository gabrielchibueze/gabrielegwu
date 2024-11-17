"use client";
import { useEffect, useState } from "react";
import classes from "./scrollToTop.module.css";
import { FaArrowUp } from "react-icons/fa6";
export default function ScrollToTop() {
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const deviceHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setShowScrollIcon(scrollPosition / (scrollHeight - deviceHeight) >= 0.1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {showScrollIcon && (
        <div
          onClick={scrollToTop}
          className={classes.scrollToTop}
          title="Scroll to top of page"
        >
          <h2>
            <FaArrowUp />
          </h2>
        </div>
      )}
    </>
  );
}
