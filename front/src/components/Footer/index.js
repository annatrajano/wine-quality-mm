// Main import
import React from "react";

// Icons
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

// Style - Footer
import style from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={style.footer__container}>
      <hr className={style.horizontal__line} />
      <h2 className={style.footer__text}>DRINK WITH YOUR EYES AND QUALITY</h2>
      <div className={style.footer__icons}>
        <FaFacebook className={style.icons} />
        <FaInstagram className={style.icons} />
        <FaTwitter className={style.icons} />
        <FaLinkedin className={style.icons} />
      </div>
      <h2 className={style.footer__text__company}>Copyright © AnnaTrajano Company {year}</h2>
    </footer>
  );
}
