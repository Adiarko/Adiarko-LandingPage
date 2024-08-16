import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adiarko Indonesia",
  description: "Adiarko's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
