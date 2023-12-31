import styles from "./Input.module.css";

interface InputProps {
  type: string;
  placeholder: string;
  required: boolean;
}

const Input: React.FC<InputProps> = ({ type, placeholder, required }) => {
  return (
    <>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default Input;
