import Image from 'next/image';
import React from 'react';

import profilePic from '@/public/assets/photos/self/hero_profile_pic.jpg';
import Link from '@/src/components/Link';
import styles from '@/src/styles/Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.profilePicContainer}>
        <Image priority src={profilePic} alt='Portrait of Maxim Chen' />
      </div>
      <div className={styles.introContainer}>
        <h1>Maxim Chen</h1>
        <div className={styles.introText}>
          Software Engineer with experience in interaction design and ui/ux
        </div>
        <div className={styles.socials}>
          <Link href={'https://github.com/chenr-maxim'}>github</Link>
          <Link href={'https://www.linkedin.com/in/maximrchen/'}>linkedin</Link>
          <Link href={'https://www.behance.net/chenmaxim'}>behance</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
