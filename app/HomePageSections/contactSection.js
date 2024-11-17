// "use client";

import classes from "./contactSection.module.css";
import ContactComponentForm from "../contact/components/contactComponent/contact";

export default function ContactSection() {
  return (
    <main className={classes.ContactSectionMain}>
      <div className={classes.contactLeft}>
        <h1>Let’s Collaborate</h1>
        <p>
          Have a project in mind or just want to connect? Reach out, and let’s
          create something amazing together!
        </p>
        <p>
          Whether you need a full-stack solution, a front-end masterpiece, or a
          scalable back-end system, I am here to help.
        </p>
      </div>
      <div className={classes.contactRight}>
        <ContactComponentForm caption="Get in Touch" />
      </div>
    </main>
  );
}
