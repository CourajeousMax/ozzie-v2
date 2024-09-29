import styles from "../../styles/Portfolio.module.css";
import Navbar from "@/components/Navbar";
import cloudinary from "cloudinary";
import { ImageGrid } from "@/components/image-grid";

export default async function GalleryPage() {
    type SearchResult = {
        public_id:string
    }
    const results = (await cloudinary.v2.search.expression("folder:ozzie").sort_by("created_at", "desc").max_results(70).execute()) as {
    resources: SearchResult[];
  };


  return (
    <div className={styles.desktopPortfolioCategories}>
      <header className={styles.headerWrapper}>
        <img className={styles.headerIcon} loading="lazy" alt="" src="/signature.png" />
      </header>
      <Navbar />
     <ImageGrid images={results.resources} />
    </div>
  );
}
