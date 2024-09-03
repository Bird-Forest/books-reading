import React from "react";
import styles from "./Library.module.css";
import { BsPlusLg } from "react-icons/bs";
import TableHeaders from "./TableHeaders";
import books from "@/books.json";
import BookItem from "../book/BookItem";

export default function ListBooksStart() {
  const arrStart = books.filter((item) => item.category === "start");
  // console.log(arr);
  return (
    <div className={styles.wrapListAny}>
      <h5 className={styles.titleList}>Маю намір прочитати</h5>
      <TableHeaders />
      <div className={styles.wrapListStart}>
        <ul className={styles.listStart}>
          {arrStart.map((item, i) => (
            <BookItem
              key={i}
              id={item.id}
              title={item.title}
              author={item.author}
              pages={item.pages}
              category={item.category}
              year={item.year}
            />
          ))}
        </ul>
        <div className={styles.wrapBtnTrain}>
          <button type="button" className={styles.btnMyTrain}>
            Моє тренування
          </button>
        </div>
      </div>

      <div className={styles.wrapBtnMore}>
        <button type="button" className={styles.btnMore}>
          <BsPlusLg className={styles.iconMore} />
        </button>
      </div>
    </div>
  );
}
