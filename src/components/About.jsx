import Image from "next/image";
import React from "react";

import aboutPic from "@/public/assets/photos/self/about_me.jpg";
import styles from "@/src/styles/About.module.scss";

import Link from "../components/Link";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutPicContainer}>
        <Image priority={true} src={aboutPic} alt="about me picture" />
      </div>
      <div className={styles.aboutDescription}>
        Now residing in the San Francisco Bay Area, I am a software engineer
        primarily focused on front-end. I also come from a design background,
        where I have a great appreciation for well-crafted aesthetics,
        typography, graphic and print design.
        <br />
        <br />
        Besides designing and coding, I&apos;m always discovering new bands and
        artists, listening to music, skateboarding, practicing guitar, taking
        photos, making coffee every morning/afternoon and writing.
        <br />
        <div className={styles.aboutSocials}>
          <Link href={"https://www.instagram.com/m520.n/"}>Instagram</Link>
          <Link href={"https://open.spotify.com/user/121781429"}>Spotify</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
