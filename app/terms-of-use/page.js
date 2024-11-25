import styles from "./terms.module.css";

const termsContent = [
  {
    title: "Introduction",
    content:
      "Welcome to the personal portfolio of Gabriel Egwu. By accessing and using this website, you agree to comply with these Terms of Use.",
  },
  {
    title: "Intellectual Property Rights",
    content:
      "All content on this site is my property unless stated otherwise. You may view and download content for personal use only.",
  },
  {
    title: "User Conduct",
    content:
      "You agree to access the site for personal purposes and refrain from disrupting its functionality.",
  },
  {
    title: "Limitation of Liability",
    content:
      "The site is provided 'as is' without warranties. I am not liable for any damages arising from your use of the site.",
  },
  {
    title: "Contact Information",
    content: "For any questions, contact me at info@gabrielegwu.com.",
  },
];

const privacyContent = [
  {
    title: "Information Collected",
    content:
      "I may collect personal information such as your name, email, and non-personal information like IP addresses.",
  },
  {
    title: "How I Use Your Information",
    content:
      "Your information is used to improve site functionality and respond to inquiries. No data is sold to third parties.",
  },
  {
    title: "Cookies and Tracking Technologies",
    content:
      "This site uses cookies to enhance user experience. By using the site, you consent to cookies.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to request access, correction, or deletion of your personal data. Contact me at info@gabrielegwu.com.",
  },
];

export default function TermsOfUse() {
  return (
    <section>
      <main className={styles.container}>
        <h1 className={styles.title}>Terms of Use</h1>
        <p className={styles.updated}>Effective Date: 01/12/2024</p>

        {termsContent.map((section, index) => (
          <section key={index} className={styles.section}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </main>
      <main className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Effective Date: 01/12/2024</p>

        {privacyContent.map((section, index) => (
          <section key={index} className={styles.section}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </main>
    </section>
  );
}
