import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight : ["400"],

})

export const metadata: Metadata = {
  title: "RB C0ffee",
  description: "Disfruta de un bun café de especialidad, en un ambiente acogedor ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className=" scroll-smooth">
      <body
        className={`${marcellus.className} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
