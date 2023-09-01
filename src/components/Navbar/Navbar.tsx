import styles from "@/components/Navbar/Navbar.module.css";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
