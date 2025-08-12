import React from 'react';

import styles from '@/src/styles/Photography.module.scss';

import Photo from './Photo';


const Photography = ({ photosData = [] }) => {
  const photoList = photosData.map((photo) => {
    return <Photo key={photo.id} photo={photo} />;
  });

  return (
    <div className={styles.photographyContainer}>
      <div className={styles.photosContainer}>{photoList}</div>
    </div>
  );
};

export default Photography;
