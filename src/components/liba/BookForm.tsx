import React from "react";
import styles from "./Library.module.css";

export default function BookForm() {
  return (
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
  );
}
