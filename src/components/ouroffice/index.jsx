import styles from "./ouroffice.module.scss";
import OurOfficeInfo from "../../data/ouroffices";
import TextInfo from "../textinfo";


function OurOffice() {
  return (
    <div className={styles.contentWrapper}>
      {OurOfficeInfo.map(({ content }, index) => (
        <TextInfo
          key={index}
          countryName={content.countryName}
          stateName={content.stateName}
          phone={content.phone}
          email={content.email}
          location={content.location}
        />
      ))}
    </div>
  );
}

export default OurOffice