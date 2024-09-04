import React from "react";
import styles from "./Library.module.css";
import books from "@/books.json";
import BookItemEnd from "../book/BookItemEnd";
import TableHeadersEnd from "./TableHeadersEnd";
import { BookCategory, BookItemProps } from "@/types/book";

// const typedBooks: BookItemProps[] = books;
const typedBooks: BookItemProps[] = books as BookItemProps[];

export default function ListBooksEnd() {
  const arrEnd = typedBooks.filter(
    (item) => item.category === BookCategory.End
  );

  return (
    <div className={styles.wrapListAny}>
      <h5 className={styles.titleList}>Прочитано</h5>
      <div className={styles.wrapTabList}>
        <TableHeadersEnd />
        <ul className={styles.listStart}>
          {arrEnd.map((item, i) => (
            <BookItemEnd
              key={i}
              // id={item._id}
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
    </div>
  );
}
