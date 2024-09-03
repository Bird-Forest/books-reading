import ListBooksStart from "@/components/liba/ListBooksStart";
import React from "react";
import styles from "@/components/liba/Library.module.css";
import NavigateLibrary from "@/components/liba/NavigateLibrary";

export default function ListBooksPage() {
  return (
    <div className={styles.wrapLibMob}>
      <NavigateLibrary />
      <ListBooksStart />
    </div>
  );
}
