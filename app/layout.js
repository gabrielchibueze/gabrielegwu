import localFont from "next/font/local";
import "./globals.css";
import BlogWrapper from "@/components/blogWrapper/blogWrapper";
import BlogHeader from "@/components/blogheader/blogheader";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Gabriel Egwu - Full-Stack Developer Portfolio",
  description:
    "Showcasing expertise in Node.js, React, Next.js, and modern web technologies.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: "flex", flexDirection: "column" }}>
        <BlogHeader />
        <div style={{ minHeight: "100vh" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
