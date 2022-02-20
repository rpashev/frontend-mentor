import Card from "./card";
import styles from "./index.module.scss";
import iconLuxury from "../../assets/3-column-preview-card-component-main/images/icon-luxury.svg";
import iconSedan from "../../assets/3-column-preview-card-component-main/images/icon-sedans.svg";
import iconSuv from "../../assets/3-column-preview-card-component-main/images/icon-suvs.svg";

const ThreeColumnPreview = () => {
  return (
    <div className={styles.page}>
      <div className={styles.list}>
        <Card
          title="SEDANS"
          img={iconSedan}
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
          sedans
        />
        <Card
          title="SUVS"
          img={iconSuv}
          description="Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures."
          suvs
        />
        <Card
          title="LUXURY"
          img={iconLuxury}
          description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
          luxury
        />
      </div>
    </div>
  );
};

export default ThreeColumnPreview;
