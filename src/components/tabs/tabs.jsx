import PropTypes from "prop-types";
import styles from "./tabs.module.scss";

function Tabs({ title, onClick, show }) {
  return (
    <ul
      className={`${styles.menu} ${show ? styles.active : ""}`}
      onClick={onClick}
    >
      <li className={styles.menuItem}>
        <div className={styles.pillContainer}>
          <span className={styles.pill}></span>
        </div>
        {title}
      </li>
    </ul>
  );
}

Tabs.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Tabs;