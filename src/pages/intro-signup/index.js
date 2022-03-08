import { Fragment, useState } from "react";
import styles from "./index.module.scss";
import errorIcon from "../../assets/intro-component-with-signup-form-master/images/icon-error.svg";

const IntroSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [successNotification, setSuccessNotification] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.heading}>
          <h1>
            Learn to code by<br></br>watching others
          </h1>
          <p>
            See how experienced developers solve problems in real time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className={styles.signup}>
          <div className={styles.promo}>
            <span>Try it free 7 days </span>then $20/mo. thereafter
          </div>
          <form onSubmit={submitHandler} method="POST">
            <div className={styles["form-control"]}>
              <input
                type="text"
                placeholder="First Name"
                onInput={(e) => setFirstName(e.target.value)}
                value={firstName}
              ></input>
              {firstNameError && (
                <Fragment>
                  <img
                    src={errorIcon}
                    alt="error"
                    className={styles["error-icon"]}
                  ></img>
                  <p className={styles.error}>First Name cannot be empty</p>
                </Fragment>
              )}
            </div>
            <div className={styles["form-control"]}>
              <input
                type="text"
                placeholder="Last Name"
                onInput={(e) => setLastName(e.target.value)}
                value={lastName}
              ></input>
              {lastNameError && (
                <Fragment>
                  <img
                    src={errorIcon}
                    alt="error"
                    className={styles["error-icon"]}
                  ></img>
                  <p className={styles.error}>Last Name cannot be empty</p>
                </Fragment>
              )}
            </div>
            <div className={styles["form-control"]}>
              <input
                type="email"
                placeholder="Email"
                onInput={(e) => setEmail(e.target.value)}
                value={email}
              ></input>
              {emailError && (
                <Fragment>
                  <img
                    src={errorIcon}
                    alt="error"
                    className={styles["error-icon"]}
                  ></img>
                  <p className={styles.error}>Email must be valid</p>
                </Fragment>
              )}
            </div>
            <div className={styles["form-control"]}>
              <input
                type="password"
                placeholder="Password"
                onInput={(e) => setPassword(e.target.value)}
                value={password}
              ></input>
              {passwordError && (
                <Fragment>
                  <img
                    src={errorIcon}
                    alt="error"
                    className={styles["error-icon"]}
                  ></img>
                  <p className={styles.error}>
                    Password must be at least 6 symbols
                  </p>
                </Fragment>
              )}
            </div>
            <button type="submit">Claim your free trial</button>
            <p>
              By clicking this button you are agreeing to our
              <span> Terms and Services</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IntroSignup;
