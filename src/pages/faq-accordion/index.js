import styles from "./index.module.scss";

const FaqAccordion = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles["img-container"]}>
          <img></img>
        </div>

        <div className={styles.content}>
          <h2>FAQ</h2>
          <div>
            <details>
              <summary>How many team members can I invite?</summary>
            </details>
            <details>
              <summary>How many team members can I invite?</summary>
            </details>
            <details>
              <summary>How many team members can I invite?</summary>
            </details>
            <details>
              <summary>How many team members can I invite?</summary>
            </details>
            <details>
              <summary>How many team members can I invite?</summary>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
