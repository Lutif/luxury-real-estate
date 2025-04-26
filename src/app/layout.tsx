import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Luxury Real Estate | Find Your Dream Home",
  description: "Discover luxury properties and find your dream home with our expert real estate agents. Browse through our exclusive collection of premium properties.",
  keywords: "real estate, luxury homes, property, real estate agency, dream home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-slate-50 font-sans antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
