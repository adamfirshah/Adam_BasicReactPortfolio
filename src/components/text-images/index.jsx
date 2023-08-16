import styles from "./text-images.module.scss";
import PropTypes from "prop-types";

export default function TextImage(props) {

  const {
    reverse,
    title = "",
    number = "",
    items = [],
    btnLink,
    image = "",
  } = props;

  const isReverse = reverse ? styles.reverse : "";

  return (
    <>
      <div className={[styles.contentContainer, isReverse].join(" ")}>
        <div className={styles.contentWrapper}>
          <div className={styles.iconNumberContainer}>
            <div className={styles.iconNumber}>{number}</div>
          </div>
          <h1>{title}</h1>
          <ol>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
          <div className={styles.buttonContainer}>
            <a href={btnLink} className={styles.button}>
              See More
            </a>
          </div>
        </div>
        <div className={styles.detailImg}>
          <div className={styles.imgCard}>
            {image && <img src={image} alt="image" />}
          </div>
        </div>
      </div>
    </>
  );
}

TextImage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  number: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  btnLink: PropTypes.string,
  reverse: PropTypes.bool,
};
