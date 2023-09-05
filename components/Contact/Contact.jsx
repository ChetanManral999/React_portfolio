import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
export const Contact = () => {
  return (
    <footer id="contacts" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/chetan-manral-a8b5b1200/">linkedin.com/ChetanManral</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/ChetanManral999">github.com/ChetanManral</a>
        </li>
      </ul>
    </footer>
  );
};