import React from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./Button.module.css";
import { roboto } from "@/app/fonts";
export default function ButtonGoogl() {
  return (
    <div className={styles.wrapBtnGoogl}>
      <FcGoogle className={styles.iconGoogl} />
      <button
        type="submit"
        className={`${roboto.className} ${styles.googlBtn}`}
      >
        Google
      </button>
    </div>
  );
}
