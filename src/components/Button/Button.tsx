import styles from "@/components/Button/Button.module.css";
import Link from "next/link";

interface ButtonProps {
  size: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  margin: string;
  disabled?: boolean;
  navigateTo?: string;
}

const Button: React.FC<ButtonProps> = ({
  size,
  label,
  onClick,
  primary,
  secondary,
  outline,
  margin,
  navigateTo,
}) => {
  return (
    <button
      style={{ margin: margin }}
      onClick={onClick}
      className={`${styles.button} ${styles.buttonMedium} ${
        primary
          ? styles.buttonPrimary
          : secondary
          ? styles.buttonSecondary
          : styles.buttonOutline
      }`}
    >
      <Link href={navigateTo ? navigateTo : ""}>{label}</Link>
    </button>
  );
};

export default Button;
