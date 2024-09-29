import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "../../styles/Portfolio.module.css";
import silentRoad from "../../../public/silent-road.jpg";
import roadtoSerenity from "../../../public/road-to-serenity.jpg";
import Dragon from "../../../public/dragon.jpg";

const workshops = () => {
  return (
    <>
      <div className={styles.desktopPortfolioCategories}>
        <header className={styles.headerWrapper}>
          <img className={styles.headerIcon} loading="lazy" alt="" src="/signature.png" />
        </header>
        <Navbar />

        <div className={styles.pageContainer}>
          <h1>
            Discover the <br/> Art and <br/>Craft of <span style={{ color: "blue" }}>Photography</span>
          </h1>
          <div className={styles.pageHeader}>
            <div className={styles.imageContainer}>
              <Image className={styles.imageCard} src={silentRoad} alt="grayscale of trees and rivers" height={300} width={200} />
              <Image className={styles.imageCard} src={roadtoSerenity} alt="sunset view of everglades marsh" height={300} width={200} />
              <Image className={styles.imageCard} src={Dragon} alt="reflective clouds over ocean view" height={300} width={200} />
            </div>
          </div>
        </div>
        <div className={styles.pageContent}>
          <p className={styles.pageText}>
            My workshops provide a supportive environment for growth and learning. Through a blend of theoretical insights, practical demonstrations,
            and hands-on shooting sessions, you'll gain the knowledge and confidence to capture stunning images.
          </p>
          <p className={styles.pageText}>
            Join our vibrant community of fellow shutterbugs and embark on an exciting journey of creativity and discovery.
          </p>
          <p className={styles.pageText}>Browse my upcoming workshops and reserve your spot today. Let's capture unforgettable moments together!</p>
        </div>
      </div>
    </>
  );
};

export default workshops;
