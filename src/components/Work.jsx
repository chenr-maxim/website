import React from "react";
import { workExperienceLabels } from "../constants/labels";

import styles from "../styles/Work.module.scss";

const Experience = ({ title, company, date, description }) => {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.title}>
        {`${title} at `} <span title="company">{company}</span>
      </div>
      <div className={styles.date}>{date}</div>
      <div className={styles.description}> {description}</div>
    </div>
  );
};

const Work = () => {
  const workExperience = workExperienceLabels.map((work) => {
    return <Experience key={work.date} {...work} />;
  });

  return <div className={styles.workContainer}>{workExperience}</div>;
};

export default Work;
