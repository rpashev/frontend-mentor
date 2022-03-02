import styles from "./index.module.scss";
import imgDesktop from "../../assets/faq-accordion-card-main/images/illustration-woman-online-desktop.svg";
import imgMobile from "../../assets/faq-accordion-card-main/images/illustration-woman-online-mobile.svg";
import AccordionItem from "./accordion-item";

const FaqAccordion = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles["img-container"]}>
          <img src={imgDesktop} alt="woman illustration"></img>
        </div>

        <div className={styles.content}>
          <h1>FAQ</h1>
          <ul className={styles.accordion}>
            <AccordionItem />
            <AccordionItem />
            <AccordionItem />
            <AccordionItem />
            <AccordionItem />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
