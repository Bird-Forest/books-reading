import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";
import { ButtonLinkProps } from "@/types/button";

// export interface ButtonLinkProps {
//   path: string;
//   children: React.ReactNode;
// }

export default function ButtonLink({ path, children }: ButtonLinkProps) {
  return (
    // <div className={styles.wrapBtnTrain}>
    <Link href={path} className={styles.btnLink}>
      {children}
    </Link>
    // </div>
  );
}
