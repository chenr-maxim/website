import { usePathname } from "next/navigation";
import React from "react";

// import Link from "next/link";
import Link from "@/src/components/Link";
import { navbarLinks } from "@/src/constants/labels.js";
import styles from "@/src/styles/NavBar.module.scss";

const NavBar = () => {
  const pathname = usePathname();

  const navbarList = navbarLinks.map((link) => {
    const activeTab = link.id === pathname;

    return (
      <li key={link.id}>
        <Link activeTab={activeTab} href={link.id}>
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLinks}>
        <ul>{navbarList}</ul>
      </div>
    </div>
  );
};

export default NavBar;
