import styles from "./gallery.module.scss";
import milk from "../../assets/sunnyside-agency-landing-page-main/images/desktop/image-gallery-milkbottles.jpg";
import orange from "../../assets/sunnyside-agency-landing-page-main/images/desktop/image-gallery-orange.jpg";
import icecream from "../../assets/sunnyside-agency-landing-page-main/images/desktop/image-gallery-cone.jpg";
import sugar from "../../assets/sunnyside-agency-landing-page-main/images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <img src={milk} alt="milk"></img>
      <img src={orange} alt="orange"></img>
      <img src={icecream} alt="icecream"></img>
      <img src={sugar} alt="sugar"></img>
    </div>
  );
};

export default Gallery;
