import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.informationContainer}>
        <ul>
          <li>Service</li>
          <li>Works</li>
          <li>Insights</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className={styles.informationContainer}>
      <div className={styles.logoContainer}>
        <ul>
          <li>
            <img src="/src/assets/linkedin.png" alt="" />
          </li>
          <li>
            <img src="/src/assets/facebook.png" alt="" />
          </li>
          <li>
            <img src="/src/assets/instagram.png" alt="" />
          </li>
          <li>
            <img src="/src/assets/youtube.png" alt="" />
          </li>
        </ul>
      </div>
      </div>


      <div className={styles.copyrightContainer}>
        <span>© Copyright GrowthOps. All rights reserved.</span>
        <div className={styles.rightSide}>
          <p className="pe-5 ps-5"> Go to global GrowthOps website </p>
          <p>Privacy policy </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
