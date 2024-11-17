// import CtaButton from "@/components/buttons/ctabuttonlink";
// import classes from "./emailSection.module.css";
// export default function EmailSection() {
//   const emailSection = {
//     caption: "Seeking Fun Activities?",
//     heading:
//       "Unplug From Daily Routines and Jump Into Engaging Experiences that Create Unforgettable Memories While Challenging Your Sense of Teamwork and Creativity",
//   };
//   return (
//     <div className={classes.emailSection}>
//       <div className={classes.header}>
//         <p>{emailSection.caption}</p>
//         <h1>{emailSection.heading}</h1>
//       </div>
//       <div style={{ margin: "0 auto", marginTop: "1rem" }}>
//         <CtaButton
//           action="maiilto:contacts@gabrielegwu.com"
//           design="plain"
//           type="link"
//         >
//           EMAIL US
//         </CtaButton>
//       </div>
//     </div>
//   );
// }

import CtaButton from "@/components/buttons/ctabuttonlink";
import classes from "./emailSection.module.css";

export default function EmailSection() {
  const emailSection = {
    caption: "Have a Project in Mind?",
    heading:
      "Let’s bring your ideas to life with high-quality, scalable, and user-focused web development solutions tailored to your needs.",
  };

  return (
    <div className={classes.emailSection}>
      <div className={classes.header}>
        <p>{emailSection.caption}</p>
        <h1>{emailSection.heading}</h1>
      </div>
      <div style={{ margin: "0 auto", marginTop: "1rem" }}>
        <CtaButton
          action="mailto:contact@gabrielegwu.com" // Update to your email
          design="plain"
          type="link"
        >
          EMAIL ME
        </CtaButton>
      </div>
    </div>
  );
}
