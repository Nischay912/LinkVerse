import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Linkverse - Your Link Manager",
  description: "You can easily manage your links with Linkverse 🔗",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ADDED FAVICON IN A HEAD TAG HERE ON LAYOUT.JS , SO THAT IT APPLIES TO ALL THE WEBPAGES IN THE WEBSITE THERE THUS, HERE BELOW. */}
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
