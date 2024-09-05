import ListBooksStart from "@/components/liba/ListBooksStart";
import React from "react";
import styles from "@/components/liba/Library.module.css";
import ListBooksInit from "@/components/liba/ListBooksInit";
import ListBooksEnd from "@/components/liba/ListBooksEnd";
import NavigateLibrary from "@/components/info/NavigateLibrary";
import ButtonMore from "@/components/button/ButtonMore";

export default function ListBooksPage() {
  return (
    <div className={styles.wrapLibMob}>
      <NavigateLibrary />
      <div className={styles.wrapAllList}>
        <ListBooksEnd />
        <ListBooksInit />
        <ListBooksStart />
      </div>
      <ButtonMore />
    </div>
  );
}
