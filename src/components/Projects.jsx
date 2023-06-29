import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  coffeeNoteImageUrls,
  notedImageUrls,
  socialTreeUrl,
} from "../constants/images";

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [coffeeNoteImageState, setCoffeeNoteImageState] = useState([
    ...coffeeNoteImageUrls,
  ]);
  const [notedImageState, setNotedImageState] = useState([...notedImageUrls]);

  useEffect(() => {}, []);

  // const coffeeNoteImagesArray = coffeeNoteImageUrls.map((img, index) => {
  //   return (
  //     <div key={index}>
  //       <Image
  //         width={500}
  //         height={500}
  //         alt="coffee note images"
  //         src={`${img}`}
  //         loader={loaderProp}
  //       />
  //     </div>
  //   );
  // });

  return (
    <div>
      <div>{}</div>
    </div>
  );
};

export default Projects;
