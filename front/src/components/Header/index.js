// Main import
import React from "react";

// Icons
import { PiWineFill } from "react-icons/pi";

//  Styles - Header
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header__container}>
      <h1 className={styles.title__home} >
        WQ <PiWineFill/>
      </h1>
      <h2 className={styles.header__text}>ABOUT US</h2>
      <h2 className={styles.header__text}>WINE</h2>
      <h2 className={styles.header__text}>EVENTS</h2>
      <h2 className={styles.header__text}>SHOP</h2>
    </header>
  );
}