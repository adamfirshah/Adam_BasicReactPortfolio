import styles from "./button.module.scss";
import PropTypes from "prop-types";

export default function Button(props) {

    const {
        btnLink,
        title = "",
      } = props;

    return (
        <>

        <div className={styles.buttonContainer}>
            <a href={btnLink} className={styles.button}>
            {title}
            </a>
        </div>

        </>
   
    );
    
}

Button.propTypes = {
    title: PropTypes.string,
    btnLink: PropTypes.string,
  };