// import CtaButton from "@/components/buttons/ctabuttonlink";
// import classes from "./locationDropBy.module.css";
// export default function LocationDropBySection() {
//   const emailSection = {
//     caption: "Discover Memorable Adventures",
//     heading:
//       "Feel the Thrill of Engaging Experiences Designed for Everyone to Enjoy Together",
//   };
//   return (
//     <section className={classes.locationBg}>
//       <div className={classes.emailSection}>
//         <div className={classes.header}>
//           <p>{emailSection.caption}</p>
//           <h1>{emailSection.heading}</h1>
//         </div>
//         <div style={{ margin: "0 auto", marginTop: "1rem" }}>
//           <CtaButton
//             action="https://maps.google.com/maps?q=17%0A%20hullgate%20street%0A%20Newcastle%2C%20AK"
//             design="flat"
//             target="_blank"
//             type="link"
//           >
//             DROP BY
//           </CtaButton>
//         </div>
//       </div>
//     </section>
//   );
// }

import CtaButton from "@/components/buttons/ctabuttonlink";
import classes from "./locationDropBy.module.css";

export default function LocationDropBySection() {
  const emailSection = {
    caption: "Stay Connected",
    heading:
      "Let's Explore Opportunities and Collaborate on New and Exciting Projects Together",
  };
  return (
    <section className={classes.locationBg}>
      <div className={classes.emailSection}>
        <div className={classes.header}>
          <p>{emailSection.caption}</p>
          <h1>{emailSection.heading}</h1>
        </div>
        <div style={{ margin: "0 auto", marginTop: "1rem" }}>
          <CtaButton
            action="/contact"
            design="transparent"
            target="_blank"
            type="link"
          >
            Collaborate with Me
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
