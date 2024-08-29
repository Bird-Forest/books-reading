import React from "react";
import styles from "./Library.module.css";
import { HiArrowLongLeft } from "react-icons/hi2";

export default function Library() {
  return (
    <div className={styles.wrapLib}>
      <div className={styles.wrapIcon}>
        <HiArrowLongLeft className={styles.iconLeft} />
      </div>
      <form className={styles.createForm}>
        <label htmlFor="title" className={styles.label}>
          Назва книги
          <input
            name="title"
            type="text"
            placeholder="..."
            required
            className={styles.input}
          />
        </label>
        <label htmlFor="author" className={styles.label}>
          Автор книги
          <input
            name="author"
            type="text"
            placeholder="..."
            required
            className={styles.input}
          />
        </label>
        <label htmlFor="year" className={styles.label}>
          Рік випуску
          <input
            name="year"
            type="text"
            // inputmode="numeric"
            placeholder="..."
            required
            className={styles.input}
          />
        </label>
        <label htmlFor="pages" className={styles.label}>
          Кількість сторінок
          <input
            name="pages"
            type="text"
            placeholder="..."
            required
            className={styles.input}
          />
        </label>
        <div className={styles.wrapBtnAdd}>
          <button type="submit" className={styles.btnCreate}>
            Додати
          </button>
        </div>
      </form>
    </div>
  );
}
