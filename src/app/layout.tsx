import { Header } from "@/components/layout/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Astrowallas - Discover the Power of Prediction",
  description:
    "Learn Vedic Astrology, Vastu Shastra, Numerology, and Face Reading with Dr. Sugandha Rawat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
