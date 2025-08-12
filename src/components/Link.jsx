import NextLink from "next/link";
import React from "react";

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
