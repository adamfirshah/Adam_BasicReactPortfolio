import logo from "./../../../public/images/logo.png";
import HamburgerMenu from "./../hamburger";
import styles from "./nav.module.scss";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} height={30} alt="Go Logo" />
        </a>
      </div>
      <div className={styles.hamburgerContainer}>
        <div className={styles.menu}>
          <a onClick={toggleMenu}>{isOpen ? "Close" : "Menu"}</a>
        </div>
        <HamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
      </div>
    </nav>
  );
}
