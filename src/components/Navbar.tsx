import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";

// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.linkContainer}>
        <Link legacyBehavior href="/">
          <a className={styles.navButton}>home</a>
        </Link>
        /
        <Link legacyBehavior href="/portfolio">
          <a className={styles.navButton}>Portfolio</a>
        </Link>
        /
        <Link legacyBehavior href="/workshops">
          <a className={styles.navButton}>Workshops</a>
        </Link>
        /
        <Link legacyBehavior href="/about">
          <a className={styles.navButton}>About</a>
        </Link>
        /
        <Link legacyBehavior href="/contact">
          <a className={styles.navButton}>Contact</a>
        </Link>
        /
        <a className={styles.navButton} href="https://fineartamerica.com/profiles/ozzie-gonzalez" target="_blank" rel="noopener noreferrer">
          F.A.A
        </a>
      </div>
      <div className={styles.socialIcons}>
        <a className="nav__link icon nav-items" href="https://www.instagram.com/artbyoz.photography/" target="_blank" rel="noopener noreferrer">
          <Image className={styles.socialIcon} loading="lazy" alt="" src="/icons8-instagram-90.png" width={45} height={45} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
