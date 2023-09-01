import "@/app/globals.css";
import Navbar from "@/components/Navbar/Navbar";

import { PT_Serif } from "next/font/google";

const pt = PT_Serif({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pt.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
