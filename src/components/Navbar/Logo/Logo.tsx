"use client";
import styles from "@/components/Navbar/Logo/Logo.module.css";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div className={styles.logo} onClick={() => router.push("/")}>
      carlyle
    </div>
  );
};

export default Logo;
