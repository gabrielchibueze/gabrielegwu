import Link from "next/link";
import classes from "./blogWrapper.module.css";
export default function BlogWrapper({ children }) {
  const upcomingevents = [
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

  return (
    <section className={classes.sideBarMenu}>
      <h3>Upcoming Events</h3>
      <ul className={classes.sideMenuLinks}>
        {upcomingevents.map((event) => (
          <li key={event.title} className="generalList">
            <Link href={event.link}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
