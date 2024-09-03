import React from "react";
import styles from "./Train.module.css";
// import ItemBookEmpty from "../book/ItemBookEmpty";
import TableHeaders from "../liba/TableHeaders";
import BookItemEmpty from "../book/BookItemEmpty";

export default function TrainListBooks() {
  return (
    <div className={styles.wrapListBook}>
      {/* <div className={styles.wrapTitleTable}>
        <p className={styles.textTab}>Назва книги</p>
        <p className={styles.textTab}>Автор</p>
        <p className={styles.textTab}>Рік</p>
        <p className={styles.textTab}>Стор.</p>
      </div> */}
      <TableHeaders />
      <BookItemEmpty />
      {/* <ItemBookEmpty /> */}
    </div>
  );
}
