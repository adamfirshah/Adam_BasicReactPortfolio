import PropTypes from "prop-types";
import styles from "./textinfo.module.scss";
import IconPhone from "./../../../public/images/phone.svg";
import IconEmail from "./../../../public/images/at.svg";
import IconLocation from "./../../../public/images/location-dot.svg";

function TextInfo({ countryName, stateName, phone, email, location }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBody}>
        <p>{countryName}</p>
        <h2>{stateName}</h2>
        <div className={styles.cardInfo}>
          <ul>
            <li>
              <img src={IconPhone} alt="image" />
              <span>{phone}</span>
            </li>
            <li>
              <img src={IconEmail} alt="image" />
              <span>{email}</span>
            </li>
            <li>
              <img src={IconLocation} alt="image" />
              <span>{location}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

TextInfo.propTypes = {
  countryName: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default TextInfo;
