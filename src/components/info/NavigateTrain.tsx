"use client";

import React from "react";
import styles from "./Navigate.module.css";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarProps } from "@/types/sidebar";

export default function NavigateTrain({}: SidebarProps) {
  const pathname = usePathname();
  return (
    <div className={styles.wrapNavigate}>
      {pathname === "/train" && (
        <Link
          href="/train/trainlist"
          className={styles.wrapIcon}
          style={{ justifyContent: "flex-end" }}
        >
          <HiArrowLongRight className={styles.iconNav} />
        </Link>
      )}
      {pathname === "/train/trainlist" && (
        <Link
          href="/train"
          className={styles.wrapIcon}
          style={{ justifyContent: "flex-start" }}
        >
          <HiArrowLongLeft className={styles.iconNav} />
        </Link>
      )}
    </div>
  );
}
