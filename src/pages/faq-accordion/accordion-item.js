import { useState } from "react";
import styles from "./accordion-item.module.scss";

const AccordionItem = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <li className={styles.item}>
      <h2 onClick={toggleActive}>How many team members can I invite?</h2>
      {active && (
        <p className={styles.details}>
          No more than 20GB. All files in your account must fit your alotted
          storage space.
        </p>
      )}
    </li>
  );
};

export default AccordionItem;
