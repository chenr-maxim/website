import { useRouter } from 'next/router';
import React from 'react';

import Link from '@/src/components/Link';
import { navbarLinks } from '@/src/constants/labels';
import styles from '@/src/styles/NavBar.module.scss';

const NavBar = () => {
  const { pathname } = useRouter();

  const navbarList = navbarLinks.map((link) => {
    const activeTab = pathname === link.id || pathname.startsWith(`${link.id}/`);

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
