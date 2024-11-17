import ContactIntroTop from "./ContactIntroTop";
import ContactSectionAllPages from "./contactSection";
export async function metadata(params) {
  return {
    title: "Get in Touch with Gabriel Egwu",
    description:
"Are you looking for a reliable Full-Stack Developer who can create modern, scalable web solutions?  Feel free to reach out to discuss your project ideas or any inquiries you may have."  };
}
export default function ContactMainPage() {
  return (
    <section>
      <ContactIntroTop />
      <ContactSectionAllPages />
    </section>
  );
}
