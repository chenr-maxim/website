import React from "react";

import Link from "@/src/components/Link";

import Slideshow from "./Slideshow";
import {
  coffeeNoteImageUrls,
  notedImageUrls,
  socialTreeUrl,
} from "../constants/images";
import { projectLabels } from "../constants/labels";
import styles from "../styles/Projects.module.scss";

const Projects = () => {
  const findProjectLabel = (projectId) => {
    return (
      projectLabels &&
      projectLabels.find((project) => project.id === `${projectId}`).description
    );
  };

  return (
    <section className={styles.projectsContainer}>
      <article className={styles.project}>
        <Slideshow imageUrls={coffeeNoteImageUrls} />
        <div className={styles.description}>
          {findProjectLabel(`coffeenote`)}
          <div className={styles.projectLink}>
            {`Check it out `}
            <Link
              styles={{ fontWeight: "bold" }}
              href={
                "https://www.behance.net/gallery/109689077/coffee-note-coffee-companion"
              }
            >
              here
            </Link>
          </div>
        </div>
      </article>
      <article className={styles.project}>
        <Slideshow imageUrls={notedImageUrls} />
        <div className={styles.description}>
          {findProjectLabel(`noted`)}
          <div className={styles.projectLink}>
            {`Check it out `}
            <Link
              styles={{ fontWeight: "bold" }}
              href={
                "https://www.behance.net/gallery/106911087/Noted-A-notetaking-app"
              }
            >
              here
            </Link>
          </div>
        </div>
      </article>
      <article className={styles.project}>
        <Slideshow imageUrls={socialTreeUrl} />
        <div className={styles.description}>
          {findProjectLabel(`socialtree`)}
          <div className={styles.projectLink}>
            {`Check it out `}
            <Link
              styles={{ fontWeight: "bold" }}
              href={"https://www.behance.net/gallery/107450713/social-tree"}
            >
              here
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
