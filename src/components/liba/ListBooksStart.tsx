import React from "react";
import styles from "./Library.module.css";
import { BsPlusLg } from "react-icons/bs";
import TableHeaders from "./TableHeaders";
import books from "@/books.json";
import BookItem from "../book/BookItem";
import { BookCategory, BookItemProps } from "@/types/book";

const typedBooks: BookItemProps[] = books as BookItemProps[];

export default function ListBooksStart() {
  // const arrStart = books.filter((item) => item.category === "start");
  // // console.log(arr);
  const arrStart = typedBooks.filter(
    (item) => item.category === BookCategory.Start
  );
  return (
    <div className={styles.wrapListAny}>
      <h5 className={styles.titleList}>Маю намір прочитати</h5>
      <div className={styles.wrapTabList}>
        <TableHeaders />
        <ul className={styles.listStart}>
          {arrStart.map((item, i) => (
            <BookItem
              key={i}
              // id={item._id}
              title={item.title}
              author={item.author}
              pages={item.pages}
              category={item.category}
              year={item.year}
            />
          ))}
        </ul>
      </div>

      {/* <div className={styles.wrapListStart}> */}
      <div className={styles.wrapBtnTrain}>
        <button type="button" className={styles.btnMyTrain}>
          Моє тренування
        </button>
      </div>
      {/* </div> */}

      <div className={styles.wrapBtnMore}>
        <button type="button" className={styles.btnMore}>
          <BsPlusLg className={styles.iconMore} />
        </button>
      </div>
    </div>
  );
}
