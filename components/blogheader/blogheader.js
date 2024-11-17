"use client";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import classes from "./blogheader.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import CtaButton from "../buttons/ctabuttonlink";

export default function BlogHeader() {
  const [headerState, setHeaderState] = useState({
    viewMobileMode: false,
    viewDesktopMode: null,
    viewMenu: false,
  });

  const primaryBlogNavs = [
    {
      name: "Resume",
      link: "/resume",
      viewSub: false,
      submenu: [
        { name: "Experience", link: "/resume/experience" },
        { name: "Skills", link: "/resume/skills" },
        { name: "Technology", link: "/resume/technology" },
        { name: "Resume", link: "/resume/resume" },
        { name: "Aspiration", link: "/resume/aspirations" },
        { name: "Organisations", link: "/resume/organisations" },
      ],
    },
    {
      name: "PROJECTS",
      link: "/projects",
      viewSub: false,
      submenu: [
        {
          name: "Frontend Projects",
          link: "/projects/frontend-projects",
        },
        {
          name: "Backend Projects",
          link: "/projects/backend-projects",
        },
        {
          name: "Fullstack Projects",
          link: "/projects/fullstack-projects",
        },
        {
          name: "Engineering Projects",
          link: "/projects/engineering-projects",
        },
        { name: "Research Projects", link: "/projects/research-projects" },
      ],
    },
    {
      name: "Events",
      link: "/events",
      viewSub: false,
      submenu: [
        { name: "Upcoming Events", link: "/events/upcoming" },
        { name: "Popular Events", link: "/events/popular" },
        { name: "Social Life", link: "/events/socials" },
      ],
    },
    {
      name: "Info",
      link: "/info",
      viewSub: false,
      submenu: [
        { name: "Employment", link: "/info/employment" },
        { name: "Career", link: "/info/career" },
        { name: "Hobby", link: "/info/hobby" },
        { name: "Philantropy", link: "/info/philantropy" },
      ],
    },
    { name: "Contact", link: "/contact" },
  ];
  const secondaryBlogNavs = [
    // {
    //   icon: (
    //     <div
    //       style={{
    //         display: "flex",
    //         gap: "0.2rem",
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <p style={{ marginBottom: "-0.2rem" }}>
    //         <FaRegUserCircle />
    //       </p>
    //       <p>Signin</p>
    //     </div>
    //   ),
    //   link: "/signin",
    // },
    // {
    //   icon: (
    //     <div>
    //       <h3>
    //         <CiSearch />
    //       </h3>
    //     </div>
    //   ),
    // },
    {
      icon: (
        <div className={classes.showInDesktopBookMe}>
          <CtaButton design="raised" type="link" action="/contact">
            WORK WITH ME
          </CtaButton>
        </div>
      ),
    },

    {
      icon: (
        <div
          onClick={toggleMenu}
          className={classes.toggleMenu}
          style={{ marginLeft: "0.5rem" }}
        >
          <h1>
            {headerState.viewMenu ? <MdOutlineCloseFullscreen /> : <IoMenu />}
          </h1>
        </div>
      ),
    },
  ];
  const socialMenuLinks = [
    { name: <FaFacebook />, link: "https://facebook.com" },
    { name: <FaInstagram />, link: "https://instagram.com" },
    { name: <FaLinkedinIn />, link: "https://linkedin.com" },
    { name: <FaXTwitter />, link: "https://x.com" },
  ];

  const socials = (
    <ul className={classes.socialMenuLinks}>
      {socialMenuLinks.map((menu) => (
        <li key={menu.link}>
          <Link href={menu.link}>{menu.name}</Link>
        </li>
      ))}
    </ul>
  );

  const pathname = usePathname();
  const [menuLinks, setMenuLinks] = useState(primaryBlogNavs);

  const [fixHeader, setFixedHeader] = useState(false);
  const [isActiveIndex, setIsActiveIndex] = useState(null);
  useEffect(() => {
    function scrollHandler() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      setFixedHeader(
        scrollPosition / (scrollHeight - screenHeight) <= 0.05162558
      );
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  // Toggle submenu visibility for a specific menu item
  function showSubMenu(index) {
    setMenuLinks((prevMenuLinks) =>
      prevMenuLinks.map((menu, i) =>
        i === index
          ? { ...menu, viewSub: !menu.viewSub }
          : { ...menu, viewSub: false }
      )
    );

    setIsActiveIndex(index);
  }

  function hideSubMenu(index) {
    setMenuLinks((prevMenuLinks) =>
      prevMenuLinks.map((menu, i) =>
        i === index ? { ...menu, viewSub: false } : { ...menu, viewSub: false }
      )
    );
  }
  function toggleMenu() {
    setHeaderState((prevState) => ({
      ...prevState,
      viewMenu: !prevState.viewMenu,
    }));
  }

  function closeMenu() {
    setHeaderState((prevState) => ({
      ...prevState,
      viewMenu: false,
    }));
  }

  return (
    <header
      className={`${
        !fixHeader ? classes.blogHeaderActive : classes.blogHeader
      }`}
      style={{ position: `${fixHeader && "fixed"}` }}
    >
      <div className={classes.headerInner}>
        <main
          className={`
        ${
          fixHeader ? classes.blogInnerHeaderActive : classes.blogInnerHeader
        } `}
        >
          <div className={classes.logosection}>
            <Link href="/" onClick={closeMenu}>
              GABRIEL EGWU
            </Link>
          </div>
          <section className={classes.headerLeft}>
            <ul className={`${classes.navs} ${classes.primaryBlogNavs}`}>
              {menuLinks.map((menu, index) => (
                <div
                  key={menu.name}
                  onMouseLeave={() => hideSubMenu(index)}
                  onMouseEnter={() => showSubMenu(index)}
                >
                  <li key={menu.link}>
                    <Link
                      className={`${
                        pathname === `${menu.link}` ? classes.isActive : ""
                      } ${
                        pathname.startsWith(menu.link) && menu.link !== "/"
                          ? classes.isActive
                          : ""
                      }`}
                      href={menu.link}
                    >
                      {menu.name}
                    </Link>
                    {menu.submenu && (
                      <div
                        onClick={() => showSubMenu(index)}
                        className={classes.menuwithsubs}
                      >
                        <h1>
                          <MdArrowDropDown />
                        </h1>
                      </div>
                    )}
                  </li>
                  {menu.submenu && isActiveIndex === index && menu.viewSub && (
                    <ul className={classes.subMenu}>
                      {menu.submenu.map((subMenu) => (
                        <Link key={subMenu.link} href={subMenu.link}>
                          <li>{subMenu.name}</li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
            <ul className={`${classes.navs} ${classes.secondaryBlogNavs}`}>
              {secondaryBlogNavs.map((nav, index) => (
                <div key={index + 1}>
                  <li key={index}>
                    {nav.link ? (
                      <Link href={nav.link}>{nav.icon}</Link>
                    ) : (
                      <li>{nav.icon}</li>
                    )}
                  </li>
                </div>
              ))}
            </ul>
          </section>
        </main>
        {/* <div className={classes.showInMobileBookMe}>
          <CtaButton design="raised" type="link" width="100%" action="/contact">
            WORK WITH ME
          </CtaButton>
        </div> */}
      </div>

      {headerState.viewMenu && (
        <div
          className={`${fixHeader ? classes.blogMenuActive : classes.blogMenu}`}
        >
          <ul className={classes.mobileMenuLinks}>
            {menuLinks.map((menu, index) => (
              <div key={`${menu.name + "1"}`}>
                <li
                  key={menu.link}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link
                    className={
                      (pathname === `${menu.link}` && classes.isActive) ||
                      (pathname.startsWith(menu.link) &&
                        menu.link != "/" &&
                        classes.isActive)
                    }
                    href={menu.link}
                    onClick={toggleMenu}
                  >
                    {menu.name}
                  </Link>

                  {menu.submenu && (
                    <span
                      className={classes.showMobileSub}
                      onClick={() => showSubMenu(index)}
                    >
                      {menu.viewSub ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                  )}
                </li>
                {menu.submenu && menu.viewSub && (
                  <ul className={classes.subMenuMobile}>
                    {menu.submenu.map((subMenu) => (
                      <Link
                        key={subMenu.link}
                        href={subMenu.link}
                        onClick={toggleMenu}
                      >
                        <li key={subMenu.name}>{subMenu.name}</li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
          <div
            style={{ margin: "0 auto", marginTop: "-5rem" }}
            onClick={toggleMenu}
          >
            {socials}
          </div>
        </div>
      )}
    </header>
  );
}
