import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styles from '@/src/styles/Slideshow.module.scss';

const Slideshow = ({ imageUrls = [] }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!imageUrls.length) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % imageUrls.length);
    }, 4000);
    return () => clearInterval(id);
  }, [imageUrls]);

  if (!imageUrls.length) return null;

  return (
    <div className={styles.slideshowContainer}>
      <Image
        fill
        style={{ objectFit: 'contain' }}
        alt='Project slideshow image'
        src={imageUrls[idx]}
      />
    </div>
  );
};

export default Slideshow;
