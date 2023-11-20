// Main import
import React from "react";

//Images and videos
import grapes from "../../assets/images/grapes.jpg";
import plums from "../../assets/images/plums.jpg";
import video from "../../assets/videos/video.mp4";

// Style - Background
import styles from "./Background.module.css";

export default function Background() {
  return (
    <div className={styles.background__container}>
      <img src={grapes} alt="grapes" className={styles.background__image}/>
      <video src={video}  controls autoPlay muted className={styles.background__image}/>
      <img src={plums} alt="grapes" className={styles.background__image}/>
    </div>
  );
}
