import styles from "./index.module.scss";
import logo from "../../assets/base-apparel-coming-soon-master/images/logo.svg";
import photo from "../../assets/base-apparel-coming-soon-master/images/hero-desktop.jpg";
import photoMobile from "../../assets/base-apparel-coming-soon-master/images/hero-mobile.jpg";
import arrow from "../../assets/base-apparel-coming-soon-master/images/icon-arrow.svg";

import { useState } from "react";

const BaseApparel = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const submitHandler = () => {
    setError(null);
    setSuccess(null);

    if (email && email.trim().includes("@") && email.trim().includes(".")) {
      setSuccess(true);
      setError(null);
      setEmail("");
    } else {
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <img src={logo} alt="logo" className={styles.logo}></img>
        <div className={styles.body}>
          <div className={styles.content}>
            <h1>
              <span>We're</span>
              <span>coming</span>
              <span>soon</span>
            </h1>
            <p>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our laund deals.
            </p>
            <div className={styles["form-input"]}>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`${error ? styles["input-error"] : ""}`}
              ></input>
              <button type="button" onClick={submitHandler}>
                <img src={arrow} alt="arrow"></img>
              </button>
              {error && (
                <p className={styles.error}>Please provide a valid email!</p>
              )}
              {success && (
                <p className={styles.success}>Thank you for your email!</p>
              )}
            </div>
          </div>
          <img className={styles.photo} src={photo} alt="hero"></img>
          <img className={styles.photoMobile} src={photoMobile} alt="hero mobile"></img>
        </div>
      </div>
    </div>
  );
};

export default BaseApparel;
