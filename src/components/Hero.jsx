import React from "react";
import Image from "next/image";
import Link from "@/src/components/Link";
import profilePic from "@/public/assets/photos/hero_profile_pic.jpg";

import styles from "@/src/styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.profilePicContainer}>
        <Image src={profilePic} alt="profile picture" />
      </div>
      <div className={styles.introContainer}>
        <h1>Maxim Chen</h1>
        <div className={styles.introText}>
          Software Engineer with experience in interaction design and ui/ux
        </div>
        <div className={styles.socials}>
          <Link href={"https://github.com/chenr-maxim"}>github</Link>
          <Link href={"https://www.linkedin.com/in/maximrchen/"}>linkedin</Link>
          <Link href={"https://www.behance.net/chenmaxim"}>behance</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
