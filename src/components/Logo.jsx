import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <picture>
        {/* Show icon.png when screen ≤ 600px */}
        <source srcSet="/icon.png" media="(max-width: 510px)" />
        <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
      </picture>
    </Link>
  );
}

export default Logo;
