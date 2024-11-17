"use client";
import classes from "./contactSection.module.css";
import { FaLocationPin, FaRegClock } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ContactComponentForm from "./components/contactComponent/contact";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function ContactSectionAllPages({ message }) {
  const path = usePathname();
  return (
    <div>
      {message && (
        <h1
          style={{
            border: "2px solid black",
            height: "fitContent",
            padding: "1rem",
            paddingBottom: "1.5rem",
          }}
        >
          {message}
        </h1>
      )}
      <main
        className={
          path.startsWith("/contact")
            ? classes.ContactSectionMain
            : classes.allPagesContact
        }
      >
        <div className={classes.contactLeft}>
          {/* <h1>We are happy to get you started with our services</h1> */}

          <p>
            Are you looking for a reliable Full-Stack Developer who can create
            modern, scalable web solutions? Feel free to reach out to discuss
            your project ideas or any inquiries you may have.
          </p>

          <section className={classes.photoBookingIcons}>
            <h1 aria-label="Location Icon">
              <Link
                href="https://maps.app.goo.gl/wHCnnQVBYj6AVM2T9"
                target="__blank"
              >
                <FaLocationPin />
              </Link>
            </h1>
            <div>
              <h3>Location</h3>
              <p>Based in Newcastle Upon Tyne, United Kingdom.</p>
            </div>
          </section>

          {/* Phone */}
          <section className={classes.photoBookingIcons}>
            <h1 aria-label="Phone Icon">
              <Link href="tel:+447444388707">
                <BsFillTelephoneFill />
              </Link>
            </h1>
            <div>
              <h3>Phone</h3>
              <p>+44-744-388-707</p>
            </div>
          </section>

          {/* Email */}
          <section className={classes.photoBookingIcons}>
            <h1 aria-label="Email Icon">
              <Link href="mailto:info@gabrielegwu.com">
                <MdEmail />
              </Link>
            </h1>
            <div>
              <h3>Email</h3>
              <p>info@gabrielegwu.com</p>
            </div>
          </section>

          {/* Hours */}
          <section className={classes.photoBookingIcons}>
            <h1 aria-label="Clock Icon">
              <FaRegClock />
            </h1>
            <div>
              <h3>Hours</h3>

              <div>
                <p>Monday - Friday, 09:00 - 19:00 </p>
                <p>
                  (Open for emails and social messages, calls when neccessary)
                </p>
              </div>

              <div>
                <p>Saturday - Sunday: 10:00 - 20:00</p>
                <p>(Open for calls, emails, social messaging)</p>
              </div>
            </div>
          </section>
        </div>

        <div className={classes.contactRight}>
          <ContactComponentForm caption="Reach out to me" />
        </div>
      </main>
    </div>
  );
}
