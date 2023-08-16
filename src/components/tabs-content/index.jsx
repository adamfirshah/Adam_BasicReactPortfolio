import { useState } from "react";
import Tabs from "./../tabs/tabs";
import Content from "./../tabs/content";
import TabInfo from "./../../data/tabdata";
import styles from "./tabs-content.module.scss";
import Image from "./../../../public/images/quote.png";

export default function TabsContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        {TabInfo.map(({ tab }, index) => (
          <Tabs
            key={index}
            title={tab.title}
            onClick={() => setActiveTab(index)}
            show={activeTab === index}
          />
        ))}
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.contentContainer}>
          {/* quote image here */}
          <img src={Image} className={styles.QuoteImage} alt="image" />
        </div>
        <div className={styles.contentContainer}>
          {TabInfo.map(({ content }, index) => (
            <Content
              key={index}
              show={activeTab === index}
              description={content.description}
              name={content.name}
              position={content.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
}