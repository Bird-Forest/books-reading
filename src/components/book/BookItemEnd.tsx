import React from "react";
import { MdMenuBook } from "react-icons/md";
import styles from "./Book.module.css";

export default function BookItemEnd() {
  return (
    <li className={styles.wrapBook}>
      <div className={styles.wrapTitleBook}>
        <div className={styles.wrapIconBook}>
          <MdMenuBook className={styles.iconBook} />
        </div>
        <h6 className={styles.titleBook}>Я бачу, вас цікавить пітьма</h6>
      </div>
      <div className={styles.wrapTextBook}>
        {/* <p className={styles.keyBook}>Автор:</p> */}
        <p className={styles.textBook}>Ілларіон Павлюк</p>
      </div>
      <div className={styles.wrapTextBook}>
        {/* <p className={styles.keyBook}>Рік:</p> */}
        <p className={styles.textBook}>2020</p>
      </div>
      <div className={styles.wrapTextBook}>
        {/* <p className={styles.keyBook}>Стор.:</p> */}
        <p className={styles.textBook}>520</p>
      </div>
    </li>
  );
}
