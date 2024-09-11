"use client";

import React, { useEffect } from "react";
import styles from "./Util.module.css";
import { GiSpellBook } from "react-icons/gi";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.bg3}>
      {/* <div className={styles.errorTitle}> */}
      <h2 className={styles.titleBg3}>
        Ми працюємо над усуненням незручностей!
      </h2>
      {/* </div> */}
      <div className={styles.wrapIcon}>
        <GiSpellBook className={styles.iconErr} />
      </div>
      <div className={styles.wrapBtn}>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className={styles.btnAuth}
        >
          Спробуй ще раз
        </button>
      </div>
    </div>
  );
}

//  {
//    /* <FaCogs className={styles.errorIcon} /> */
//    // import { FaCogs } from "react-icons/fa";
//  }
