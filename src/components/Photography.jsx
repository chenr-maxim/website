import React, { useState, useEffect } from "react";

import styles from "@/src/styles/Photography.module.scss";

import Photo from "./Photo";

const Photography = ({ photosData }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(photosData);
  }, [photosData]);

  const photoList = photos.map((photo) => {
    return <Photo key={photo.id} photo={photo} />;
  });

  return (
    <div className={styles.photographyContainer}>
      <div className={styles.photosContainer}>{photoList}</div>
    </div>
  );
};

export default Photography;
