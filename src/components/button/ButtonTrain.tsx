import React from "react";
import styles from "./Button.module.css";

export default function ButtonTrain() {
  return (
    <div className={styles.wrapBtnTrain}>
      <button type="button" className={styles.btnMyTrain}>
        Моє тренування
      </button>
    </div>
  );
}
