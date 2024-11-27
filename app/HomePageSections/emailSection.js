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
          action="mailto:info@gabrielegwu.com" // Update to your email
          design="plain"
          type="link"
        >
          Email me
        </CtaButton>
      </div>
    </div>
  );
}
