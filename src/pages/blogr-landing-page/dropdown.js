import styles from "./dropdown.module.scss";
import arrowLight from "../../assets/blogr-landing-page-main/images/icon-arrow-light.svg";

const DropDown = (props) => {
  const isActive = props.active === props.title ? true : false;

  return (
    <li className={styles.dropdown} onMouseEnter={props.dropdownHandler.bind(null, props.title)}>
      <p className={`${isActive && styles.active}`}>
        <span>{props.title}</span>
        <img src={arrowLight} alt="arrow"></img>
      </p>
      {isActive && (
        <div className={styles.options}>
          {props.links.map((link) => (
            <a href="/" key={link}>
              {link}
            </a>
          ))}
        </div>
      )}
    </li>
  );
};

export default DropDown;
