import styles from "./paragraph.module.scss";
import PropTypes from "prop-types";

export default function Paragraph(props) {
  // Using the props for usable and dynamic data
  const {
    number = "",
    title = "",
    description = "",
    justifyContent = "flex-start",
    image = "",
  } = props;

  const containerStyle = {
    justifyContent: justifyContent,
  };

  return (
    <div className={styles.paragraphContainer} style={containerStyle}>
      <div className={styles.paragraphWrapper}>
        <h3>{number}</h3>
        <h5>{title}</h5>
        <div className="pt-5">
          {image && <img src={image} alt="image" />}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

Paragraph.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  justifyContent: PropTypes.string,
  image: PropTypes.string,
};