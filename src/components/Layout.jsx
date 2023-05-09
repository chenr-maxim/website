import React from "react";
import NavBar from "@/src/components/NavBar";

import styles from "@/src/styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
