import "@/app/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";

import { PT_Serif } from "next/font/google";
const ptSerif = PT_Serif({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Student Data",
  description: "No Descn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ptSerif.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
