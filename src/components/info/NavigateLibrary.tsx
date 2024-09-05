"use client";

import React from "react";
import styles from "./Navigate.module.css";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarProps } from "@/types/sidebar";

// export interface SidebarProps {}

export default function NavigateLibrary({}: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={styles.wrapNavigate}>
      {pathname === "/liba" && (
        <Link
          href="liba/listbooks"
          className={styles.wrapIcon}
          style={{ justifyContent: "flex-end" }}
        >
          <HiArrowLongRight className={styles.iconNav} />
        </Link>
      )}
      {pathname === "/liba/listbooks" && (
        <Link
          href="/liba"
          className={styles.wrapIcon}
          style={{ justifyContent: "flex-start" }}
        >
          <HiArrowLongLeft className={styles.iconNav} />
        </Link>
      )}
    </div>
  );
}
