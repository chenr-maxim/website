import React from "react";
import Image from "next/image";
import aboutPic from "@/public/assets/photos/about_me.jpg";
import Link from "../components/Link";

import styles from "@/src/styles/About.module.scss";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutPicContainer}>
        <Image src={aboutPic} alt="about me picture" />
      </div>
      <div className={styles.aboutDescription}>
        Now residing in the San Francisco Bay Area, I am a software engineer
        primarily focused on front-end. I also come from a design background,
        where I have a great appreciation for well-crafted aesthetics,
        typography, graphic and print design.
        <br />
        <br />
        Besides designing and coding, I&apos;m always discovering new bands and
        artists, listening to music, practicing guitar, taking photos, making
        coffee every morning and writing in my journal.
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
