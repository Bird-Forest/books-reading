import React from "react";
import styles from "../../components/liba/Library.module.css";
import Library from "@/components/liba/Library";

export default function LibraryPage() {
  return (
    <div className={styles.libPage}>
      <Library />
    </div>
  );
}
