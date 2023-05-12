import React from "react";
import Image from "next/image";

import styles from "@/src/styles/Photos.module.scss";

const Photo = ({ photo }) => {
  console.log(photo, "individual photo");
  return (
    <div className={styles.photoContainer}>
      <Image
        quality={60}
        fill
        src={photo.media_url}
        alt={photo.caption || "instagram photo caption"}
        sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 25vw"
      />
      <div className={styles.caption}>{photo.caption}</div>
    </div>
  );
};

export default Photo;
