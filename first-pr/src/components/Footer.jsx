import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} ${styles.container}`}>
        Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        <div className={styles.footerIcons}>
          <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
          <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
