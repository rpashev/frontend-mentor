import styles from "./index.module.scss";
import divider from "../../assets/advice-generator-app-main/images/pattern-divider-desktop.svg";
import dividerMobile from "../../assets/advice-generator-app-main/images/pattern-divider-mobile.svg";
import dice from "../../assets/advice-generator-app-main/images/icon-dice.svg";
import { useState } from "react";

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState(null);
  const [error, setError] = useState(null);

  const adviceHandler = async () => {
    let response;
    let result;

    setError(null);
    try {
      response = await fetch("https://api.adviceslip.com/advice");
      if (response.ok) {
        result = await response.json();
        setAdvice(result.slip);
      } else {
        return setError(true);
      }
    } catch (err) {
      return setError(err);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2>Advice # {advice.id}</h2>
        <p>&#8220;{advice.advice}&#8221;</p>
        <img src={divider} alt="divider" className={styles.divider}></img>
        <img
          src={dividerMobile}
          alt="divider"
          className={styles.dividerMobile}
        ></img>
        {error && (
          <p className={styles.error}>
            Could not give give advice, hopeless case!
          </p>
        )}
        <button onClick={adviceHandler}>
          <img src={dice} alt="dice button"></img>
        </button>
      </div>
    </div>
  );
};

export default AdviceGenerator;
