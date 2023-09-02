import "@/app/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import NewStudentModal from "@/components/Modal/NewStudentModal/NewStudentModal";
import type { Metadata } from "next";

import { PT_Serif } from "next/font/google";
const font = PT_Serif({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Student Database",
  description: "To be updated.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NewStudentModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
