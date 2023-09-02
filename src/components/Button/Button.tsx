import styles from "@/components/Button/Button.module.css";
import Link from "next/link";

interface ButtonProps {
  small?: boolean;
  medium?: boolean;
  label: string;
  onClick: () => void;
  primary?: boolean;
  secondary?: boolean;
  margin: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  small,
  medium,
  label,
  onClick,
  primary,
  secondary,
  margin,
}) => {
  const handleClick = () => {
    onClick();
    console.log("object");
  };

  return (
    <button
      style={{ margin: margin }}
      onClick={handleClick}
      className={`${styles.button} ${styles.buttonMedium} ${
        primary
          ? styles.buttonPrimary
          : secondary
          ? styles.buttonSecondary
          : styles.buttonOutline
      } ${
        small
          ? styles.buttonSmall
          : medium
          ? styles.buttonMedium
          : styles.buttonLarge
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
