import "./globals.css";
import BlogHeader from "@/components/blogheader/blogheader";
import Footer from "@/components/footer/footer";
import { Analytics } from "@vercel/analytics/react";
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
        <div
          style={{
            minHeight: "100vh",
            paddingTop: "8rem",
            paddingBottom: "3rem",
          }}
        >
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
