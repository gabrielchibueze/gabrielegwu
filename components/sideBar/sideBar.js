import Link from "next/link";
import classes from "./sideBar.module.css";
export default function SideBar({ linksArray, children }) {
  const origignalLinks = [
    {
      title: "Data Analytics Training",
      link: "/services/training-and-human-development/data-analysis-training",
    },
    {
      title: "Web Development Services",
      link: "/services/training-and-human-development/web-development",
    },
    {
      title: "Business Analytics and forcasting",
      link: "/services/business-data-analytics",
    },
    {
      title: "Training Experts in Data Analytics for Businesses",
      link: "/services/business-data-analytics/training-experts-in-data-analytics",
    },
    {
      title: "Asset Performance Optimization",
      link: "/services/asset-and-facility-management/facility-management-consulting",
    },
  ];
  const mainLinks = linksArray || origignalLinks;
  return (
    <main className="sideBar">
      {children}
      <section className={classes.sideBarMenu}>
        <h3>Other Links</h3>
        <ul className={classes.sideMenuLinks}>
          {mainLinks.map((Olink) => (
            <li key={Olink.title} className="generalList">
              <Link href={Olink.link}>{Olink.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
