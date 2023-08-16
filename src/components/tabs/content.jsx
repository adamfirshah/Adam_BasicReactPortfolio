import PropTypes from "prop-types";
import styles from "./tabs.module.scss";

function TabContent({ name, position, description, show }) {
  return (
    <div className={show ? styles.content : "hidden"}>
      <div className={styles.textDesc}>
        <p>{description}</p>
        <h6>{name}</h6>
        <span>{position}</span>
      </div>
    </div>
  );
}

TabContent.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default TabContent;