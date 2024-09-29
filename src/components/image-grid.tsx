"use client"
import { useState } from "react";
import { CloudinaryImage } from "@/app/portfolio/cloudinary-list";
import styles from "@/styles/Portfolio.module.css";
import Lightbox, { Slide } from "yet-another-react-lightbox";
import { Slideshow } from "yet-another-react-lightbox/plugins";
const MAX_COLUMNS = 4;

type SearchResult = {
  public_id: string;
};
export function ImageGrid({ images }: { images: SearchResult[] }) {

  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => {
      return idx % MAX_COLUMNS === colIndex;
    });
  }


  const [openLightBox, setopenLightBox] = useState(false);

 const slides: Slide[] = images.map((result) => ({
   src: `https://res.cloudinary.com/dculs8zbk/image/upload/${result.public_id}`,
   alt: "An image of something",
 }));

  return (
    <div className={styles.masonry}>
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map((column, idx) => (
        <div key={idx} className="">
          {column.map((result) => (
            <CloudinaryImage
              onClick={() => setopenLightBox(true)}
              key={result.public_id}
              src={result.public_id}
              className={styles.item}
              alt="an image of something"
              width="400"
              height="300"
            />
          ))}
          <Lightbox open={openLightBox} close={() => setopenLightBox(false)} plugins={[Slideshow]} slides={ slides } />
        </div>
      ))}
    </div>
  );
}
