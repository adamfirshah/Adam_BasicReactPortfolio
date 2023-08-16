import styles from "./hamburger.module.scss";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function HamburgerMenu({ isOpen, onClick }) {
  const toggleMenu = () => {
    onClick();
  };

  return (

    <div className={styles.HamburgerMenu}>
      <label htmlFor="hamburger-checkbox" className={styles.hamburgerLabel}>
        <input
          type="checkbox"
          id="hamburger-checkbox"
          className={styles.hamburgerCheckbox}
          checked={isOpen}
          onChange={toggleMenu}
        />
        <div className={styles.hamburgerLines}>
          <span className={`${styles.line} ${styles.line1}`}></span>
          <span className={`${styles.line} ${styles.line2}`}></span>
          <span className={`${styles.line} ${styles.line3}`}></span>
        </div>
      </label>
      <div>
        <nav className={`${styles.menuContainer} ${isOpen ? styles.open : ""}`}>
          <div className={styles.menuOverlay}></div>
          <ul>
            <li>SERVICES</li>
            <li>WORKS</li>
            <li>INSIGHTS</li>
            <li>CAREERS</li>
            <li>
            <Link to="/contactus">CONTACT US </Link>
             </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
