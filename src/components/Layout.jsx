import React from "react";
import NavBar from "@/src/components/NavBar";

import styles from "@/src/styles/Layout.module.scss";

export const CenteredLayout = ({ children }) => {
  console.log(children, "layout children");

  return (
    <div className={styles.layoutContainer}>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export const LinksLayout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <main>{children}</main>
    </div>
  );
};
