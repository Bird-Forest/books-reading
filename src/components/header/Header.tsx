import React from "react";
import styles from "./Header.module.css";
import { abril } from "@/app/fonts";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className={styles.header}>
      <h4 className={`${abril.className} ${styles.logo}`}>BR</h4>
      <Navigation />
    </div>
  );
}
