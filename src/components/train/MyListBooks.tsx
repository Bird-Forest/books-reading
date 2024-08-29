import React from "react";
import styles from "./Train.module.css";
import ItemBookEmpty from "./ItemBookEmpty";

export default function MyListBooks() {
  return (
    <div className={styles.wrapListBook}>
      <div className={styles.wrapTitleTable}>
        <p className={styles.textTab}>Назва книги</p>
        <p className={styles.textTab}>Автор</p>
        <p className={styles.textTab}>Рік</p>
        <p className={styles.textTab}>Стор.</p>
      </div>
      <ItemBookEmpty />
    </div>
  );
}
