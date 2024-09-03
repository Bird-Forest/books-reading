import React from "react";
import styles from "@/components/liba/Library.module.css";
import NavigateLibrary from "@/components/liba/NavigateLibrary";
import BookForm from "@/components/liba/BookForm";
import ListBooksStart from "@/components/liba/ListBooksStart";
import ListBooksInit from "@/components/liba/ListBooksInit";

// export interface PageProps {}

export default function LibraryPage() {
  return (
    <>
      <div className={styles.wrapLibMob}>
        <NavigateLibrary />
        <BookForm />
      </div>
      <div className={styles.wrapLibDeck}>
        <BookForm />
        <ListBooksInit />
        <ListBooksStart />
      </div>
    </>
  );
}
