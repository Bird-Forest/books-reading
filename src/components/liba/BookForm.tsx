"use client";

import React from "react";
import styles from "./Library.module.css";
import { BookCategory, BookItemProps } from "@/types/book";

export default function BookForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newBook: BookItemProps = {
      title: formData.get("title") as string,
      author: formData.get("author") as string,
      year: formData.get("year") as string,
      pages: Number(formData.get("pages")),
      rating: [false, false, false, false, false],
      category: BookCategory.Start,
    };
    console.log(newBook);
    event.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={styles.createForm}>
      <label htmlFor="title" className={styles.label}>
        Назва книги
        <input
          name="title"
          placeholder="..."
          required
          className={styles.input}
        />
      </label>
      <label htmlFor="author" className={styles.label}>
        Автор книги
        <input
          name="author"
          placeholder="..."
          required
          className={styles.input}
        />
      </label>
      <label htmlFor="year" className={styles.label}>
        Рік випуску
        <input
          name="year"
          placeholder="..."
          required
          className={styles.input}
        />
      </label>
      <label htmlFor="pages" className={styles.label}>
        Кількість сторінок
        <input
          name="pages"
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
