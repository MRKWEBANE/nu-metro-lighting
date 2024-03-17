import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nu Metro Lighting",
  description: "Modern Ecommerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
        {children}
        </div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content" >
          <p>copyright @ 2024 - All right reserved by Nu metro lighting</p>
        </footer>
         </body>
    </html>
  );
}
