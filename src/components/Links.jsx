import React from "react";
import styles from "@/src/styles/Links.module.scss";
import { socialLinks } from "../constants/labels";
import Link from "./Link";
import NextLink from "next/link";

const linksList = socialLinks.map((link) => {
  return (
    <li key={link.title}>
      <Link href={link.url}>{link.title}</Link>
    </li>
  );
});

const Links = () => {
  return (
    <div className={styles.linksContainer}>
      <Link href="/">
        <h1>Maxim Chen</h1>
      </Link>

      <ul>{linksList}</ul>
    </div>
  );
};

export default Links;
