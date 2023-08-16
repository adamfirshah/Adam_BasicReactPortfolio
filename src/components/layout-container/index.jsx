  import PropTypes from "prop-types";
import styles from "./layoutcontainer.module.scss";

function LayoutContainer({ children }) {
    return <div className={styles.containerStyle}>{children}</div>;
}

LayoutContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutContainer;
