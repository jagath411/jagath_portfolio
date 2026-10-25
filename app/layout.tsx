import "./globals.css";
import { Archivo, Source_Sans_3 } from "next/font/google";
import FloatingNav from "@/components/floating-nav";
import Footer from "@/components/footer";
import ChatAssistant from "@/components/chat-assistant";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-archivo",
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source-sans",
});

export const metadata = {
  title: "Jagath K R | Full-stack software engineer",
  description:
    "Jagath K R builds fintech platforms, data pipelines and AI agents with React, Node.js, Python and AWS. Open to software engineering roles in Germany.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${sourceSans.variable}`}>
      <body>
        <FloatingNav />
        <div className="aurora" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        {children}
        <Footer />
        <ChatAssistant />
      </body>
    </html>
  );
}
