import styles from "./header.module.scss";
import logo from "../../assets/blogr-landing-page-main/images/logo.svg";
import DropDown from "./dropdown";
import { useState } from "react";

const linksData = [
  { title: "Product", links: ["Shop", "Categories", "Discounts"] },
  { title: "Company", links: ["About Us", "History", "Partners"] },
  { title: "Connect", links: ["Contact", "Newsletter", "LinkedIn"] },
];

const Header = () => {
  const [active, setActive] = useState("");

  const dropdownHandler = (link) => {
    setActive(link);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar} onMouseLeave={() => setActive("")}>
        <img src={logo} alt="logo"></img>
        <nav>
          <ul className={styles.links}>
            {linksData.map((link) => (
              <DropDown
                title={link.title}
                links={link.links}
                key={link.title}
                dropdownHandler={dropdownHandler}
                active={active}
              />
            ))}
          </ul>
          <ul className={styles.actions}>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Signup</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
