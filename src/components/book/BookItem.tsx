import React from "react";
import { MdMenuBook } from "react-icons/md";
import styles from "./Book.module.css";
import { BookItemProps } from "@/types/book";

// export interface BookItemProps {
//   id: number;
//   title: string;
//   author: string;
//   pages: number;
//   year: string;
//   rating?: boolean[];
//   category?: string;
//   resume?: string;
//   statistics?: any[];
// }

export default function BookItem(item: BookItemProps) {
  return (
    <li key={item._id} className={styles.wrapBook}>
      <div className={styles.wrapTitleBook}>
        <div className={styles.wrapIcon}>
          <MdMenuBook
            className={
              item.category !== "init" ? styles.iconBook : styles.iconBookOrang
            }
          />
        </div>
        <h6 className={styles.titleBook}>{item.title}</h6>
      </div>
      <div className={styles.wrapTextBook}>
        <p className={styles.keyBook}>Автор:</p>
        <p className={styles.textBook}>{item.author}</p>
      </div>
      <div className={styles.wrapTextBook}>
        <p className={styles.keyBook}>Рік:</p>
        <p className={styles.textBook}>{item.year}</p>
      </div>
      <div className={styles.wrapTextBook}>
        <p className={styles.keyBook}>Стор.:</p>
        <p className={styles.textBook}>{item.pages}</p>
      </div>
    </li>
  );
}
