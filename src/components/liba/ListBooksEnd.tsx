import React from "react";
import styles from "./Library.module.css";
import TableHeaders from "./TableHeaders";
import books from "@/books.json";
import BookItemEnd from "../book/BookItemEnd";

export default function ListBooksEnd() {
  const arrEnd = books.filter((item) => item.category === "end");

  return (
    <div className={styles.wrapListAny}>
      <h5 className={styles.titleList}>Прочитано</h5>
      <TableHeaders />
      <ul className={styles.listStart}>
        {arrEnd.map((item, i) => (
          <BookItemEnd
            key={i}
            id={item.id}
            title={item.title}
            author={item.author}
            pages={item.pages}
            category={item.category}
            year={item.year}
            rating={item.rating}
            resume={item.resume}
          />
        ))}
      </ul>
    </div>
  );
}
