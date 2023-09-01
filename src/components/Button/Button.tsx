import styles from "@/components/Button/Button.module.css";

interface ButtonProps {
  size: string;
  label: string;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  margin: string;
}

const Button: React.FC<ButtonProps> = ({
  size,
  label,
  onClick,
  primary,
  secondary,
  outline,
  margin,
}) => {
  return (
    <button
      style={{ margin: margin }}
      className={`${styles.button} ${styles.buttonMedium} ${
        primary
          ? styles.buttonPrimary
          : secondary
          ? styles.buttonSecondary
          : styles.buttonOutline
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
