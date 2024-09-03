import ListBooksStart from "@/components/liba/ListBooksStart";
import React from "react";
import styles from "@/components/liba/Library.module.css";
import NavigateLibrary from "@/components/liba/NavigateLibrary";
import books from "@/books.json";
import ListBooksInit from "@/components/liba/ListBooksInit";
import ListBooksEnd from "@/components/liba/ListBooksEnd";

export default function ListBooksPage() {
  return (
    <div className={styles.wrapLibMob}>
      <NavigateLibrary />

      <ListBooksEnd />
      <ListBooksInit />
      <ListBooksStart />
    </div>
  );
}
