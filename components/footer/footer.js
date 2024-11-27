import Link from "next/link";
import classes from "./footer.module.css";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  const socialMenuLinks = [
    {
      title: <FaFacebook />,
      link: "https://www.facebook.com/egwu.gabrielchibueze",
    },
    {
      title: <FaGithub />,
      link: "https://github.com/gabrielchibueze",
    },
    {
      title: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/gabriel-egwu",
    },
    { title: <FaXTwitter />, link: "https://twitter.com/ChibuezeEgwu" },
  ];

  const SocialQuickLinks = () => {
    return (
      <div className={classes.socialMenuLinks}>
        {socialMenuLinks.map((menu) => {
          return (
            <Link href={menu.link} key={menu.link} target="__blank">
              <li key={menu.link}>{menu.title}</li>
            </Link>
          );
        })}
      </div>
    );
  };
  const footerQuickLinksTop = [
    {
      title: "POPULAR VISITS",
      links: [
        { title: "My Projects", link: "/projects" },
        { title: "Experience", link: "/resume/experience" },
        { title: "Technology", link: "/resume/technology" },
        { title: "Resume", link: "/resume" },
        { title: "Events", link: "/events" },
      ],
    },
  ];
  function returnfooterQuickLinks(quickLinkData) {
    return (
      <div className={classes.quickLinksContents}>
        {quickLinkData.map((quickLinks) => {
          return (
            <div className={classes.quickLinkSections} key={quickLinks.title}>
              <h3>{quickLinks.title}</h3>
              <ul>
                {quickLinks.links.map((subLinks) => (
                  <li key={subLinks.title}>
                    <Link href={subLinks.link}>{subLinks.title}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/">
                    <div className={classes.logosection}>GABRIEL EGWU</div>
                  </Link>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
  const ContactSection = () => {
    return (
      <div className={classes.quickLinkSections}>
        <h3>CONTACT INFO</h3>
        <ul className={classes.contactUsSection}>
          <li>
            <span>Address: </span>Newcastle Upon Tyne, United Kingdom.
          </li>
          <li>
            <span>Phone: </span> +44 7444388707
          </li>
          <li>
            <span>E-mail: </span>
            info@gabrielegwu.co.uk
          </li>
        </ul>
      </div>
    );
  };
  const OurSocials = () => {
    return (
      <div className={classes.quickLinkSections}>
        <h3>MORE ABOUT ME</h3>
        <p>Follow me on social Media</p>
        <SocialQuickLinks />
      </div>
    );
  };
  const OpeningTimes = () => {
    return (
      <div className={classes.quickLinkSections}>
        <h3>MY AVAILABILITY</h3>
        <ul className={classes.contactUsSection}>
          <li>
            <span>Monday to Friday: </span> 9:00 - 19:00 (Open for emails and
            social messages, calls when neccessary)
          </li>
          <li>
            <span>Saturday - Sunday: </span>
            10:00 - 20:00 (Open for calls, emails, social messaging)
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className={classes.footerDiv}>
      <footer>
        <div className={classes.footerQuickLinksTop}>
          {returnfooterQuickLinks(footerQuickLinksTop)}
          <OpeningTimes />
          <ContactSection />
          <OurSocials />
        </div>
      </footer>

      <div className={classes.subFooter}>
        <section>
          <h4>© {new Date().getFullYear()} | gabrielegwu |</h4>
        </section>
        <Link href="/terms-of-use"> All rights reserved</Link>

        <Link href="/terms-of-use" style={{ textDecoration: "underline" }}>
          Terms of use
        </Link>
      </div>
    </div>
  );
}
