"use client";

import React, { useState } from "react";
import styles from "./Library.module.css";
import books from "@/books.json";
// import BookItemEnd from "../book/BookItemEnd";
// import TableHeadersEnd from "./TableHeadersEnd";
import { BookCategory, BookItemProps } from "@/types/book";
import BookItem from "../book/BookItem";
import { IoStarOutline, IoStar } from "react-icons/io5";
import { createPortal } from "react-dom";
import OverlayModal from "../modal/OverlayModal";
import ResumeModal from "../modal/ResumeModal";
import TableHeaders from "./TableHeaders";

// const typedBooks: BookItemProps[] = books;
const typedBooks: BookItemProps[] = books as BookItemProps[];

export default function ListBooksEnd() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const arrEnd = typedBooks.filter(
    (item) => item.category === BookCategory.End
  );

  return (
    <div className={styles.wrapListAny}>
      <h5 className={styles.titleList}>Прочитано</h5>
      <div className={styles.wrapTabList}>
        <div className={styles.wrapTabHead}>
          <div className={styles.wrapTabEnd}>
            <TableHeaders />
          </div>
          <div className={styles.wrapTabRating}>
            <p className={styles.textRating}>Рейтинг книги</p>
          </div>
        </div>
        <ul className={styles.listStart}>
          {arrEnd.map((item, i) => (
            <li key={i} className={styles.wrapBookEnd}>
              <BookItem
                // id={item._id}
                title={item.title}
                author={item.author}
                pages={item.pages}
                category={item.category}
                year={item.year}
              />
              <div className={styles.wrapItemEnd}>
                <div className={styles.wrapKeyStar}>
                  <p className={styles.keyBook}>Рейтинг:</p>
                  <ul className={styles.wrapStars}>
                    {item.rating?.map((el, i) => (
                      <li key={i} className={styles.wrapStar}>
                        {el ? (
                          <IoStar className={styles.iconStar} />
                        ) : (
                          <IoStarOutline className={styles.iconStar} />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.wrapBtnResume}>
                  <button
                    type="button"
                    onClick={openModal}
                    className={styles.btnResume}
                  >
                    Резюме
                  </button>
                  {showModal &&
                    createPortal(
                      <OverlayModal
                        closeModal={closeModal}
                        content={
                          <ResumeModal item={item} closeModal={closeModal} />
                        }
                      />,
                      document.body
                    )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// <BookItemEnd
//   key={i}
//   // id={item._id}
//   title={item.title}
//   author={item.author}
//   pages={item.pages}
//   category={item.category}
//   year={item.year}
//   rating={item.rating}
//   resume={item.resume}
// />
