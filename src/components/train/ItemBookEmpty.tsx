import React from "react";
import { MdMenuBook } from "react-icons/md";
import styles from "./Train.module.css";

export default function ItemBookEmpty() {
  return (
    <div className={styles.wrapBook}>
      <div className={styles.wrapTitleBook}>
        <div className={styles.wrapIcon}>
          <MdMenuBook className={styles.iconBook} />
        </div>
        <p className={styles.textBook}>...</p>
      </div>
      <div className={styles.wrapText}>
        <p className={styles.textBook}>Автор: ...</p>
        <p className={styles.textBook}>Рік: ...</p>
        <p className={styles.textBook}>Стор.: ...</p>
      </div>
    </div>
  );
}
