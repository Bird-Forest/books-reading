import React from "react";
import styles from "./Library.module.css";
import books from "@/books.json";
import BookItem from "../book/BookItem";
import TableHeaders from "./TableHeaders";
import { BookCategory, BookItemProps } from "@/types/book";

const typedBooks: BookItemProps[] = books as BookItemProps[];

export default function ListBooksInit() {
  // const arrInit = books.filter((item) => item.category === "init");
  const arrInit = typedBooks.filter(
    (item) => item.category === BookCategory.Init
  );
  return (
    <div className={styles.wrapListAny}>
      <h5 className={styles.titleList}>Читаю</h5>
      <div className={styles.wrapTabList}>
        <TableHeaders />
        <ul className={styles.listStart}>
          {arrInit.map((item, i) => (
            <li key={i} className={`${styles.wrapBook} ${styles.bgBook}`}>
              <BookItem
                // id={item._id}
                title={item.title}
                author={item.author}
                pages={item.pages}
                category={item.category}
                year={item.year}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
