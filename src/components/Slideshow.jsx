import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import styles from "@/src/styles/Slideshow.module.scss";

const Slideshow = ({ imageUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageUrls, setCurrentImageUrls] = useState(imageUrls);

  const switchImages = useCallback(() => {
    if (currentImageIndex < currentImageUrls.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  }, [currentImageUrls, currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(switchImages, 4000);
    return () => clearInterval(interval);
  }, [switchImages]);

  return (
    <div className={styles.slideshowContainer}>
      <Image
        fill
        style={{ objectFit: "contain" }}
        alt="slideshow images"
        src={currentImageUrls[currentImageIndex]}
      />
    </div>
  );
};

export default Slideshow;
