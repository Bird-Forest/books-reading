import React from "react";
import styles from "./Train.module.css";

export default function TitlesOfTable() {
  return (
    <div className={styles.wrapTitleTable}>
      <div className={styles.titleTab}>
        <p className={styles.textTab}>Назва книги</p>
        <p className={styles.textTab}>Автор</p>
        <p className={styles.textTab}>Рік</p>
        <p className={styles.textTab}>Стор.</p>
      </div>
    </div>
  );
}
