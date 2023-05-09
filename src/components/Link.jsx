import React from "react";
import NextLink from "next/link";

import styles from "@/src/styles/Link.module.scss";

const Link = ({ activeTab, href, children }) => {
  return (
    <NextLink
      className={`${styles.links} ${activeTab ? styles.active : ""}`}
      href={href}
    >
      {children}
    </NextLink>
  );
};

export default Link;
