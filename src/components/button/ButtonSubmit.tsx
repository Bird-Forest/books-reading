import React from "react";
import styles from "./Button.module.css";

type BtnSubmit = {
  children: string;
};

export default function ButtonSubmit({ children }: BtnSubmit) {
  return (
    <div className={styles.wrapBtn}>
      <button type="submit" className={styles.submitBtn}>
        {children}
      </button>
    </div>
  );
}
