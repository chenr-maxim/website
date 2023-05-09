import React from "react";
import Image from "next/image";

import styles from "@/src/styles/Photos.module.scss";

const Photo = ({ photo }) => {
  console.log(photo, "individual photo");
  return (
    <div className={styles.photoContainer}>
      <Image quality={60} fill src={photo.media_url} alt={photo.caption} />
      {/* <div className={styles.photoDescription}>{photo.caption}</div> */}
    </div>
  );
};

export default Photo;
