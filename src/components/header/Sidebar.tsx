"use client";

import React from "react";
import { VscHome } from "react-icons/vsc";
import { MdMenuBook } from "react-icons/md";
import SidebarItem from "./SidebarItem";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { SidebarProps } from "@/types/sidebar";
import { abril } from "@/app/fonts";
import { GrLanguage } from "react-icons/gr";

// export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/");
  const page = segments[1];

  const handleExitClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.wrapSidebar}>
      <ul className={styles.wrapSideList}>
        <SidebarItem current={page === "/"} pathname="/">
          <h4 className={`${abril.className} ${styles.logo}`}>BR</h4>
        </SidebarItem>
        <SidebarItem current={page === "statistic"} pathname="/statistic">
          <p className={styles.logo}>S</p>
        </SidebarItem>
        <SidebarItem current={page === "liba"} pathname="/liba">
          <VscHome className={styles.iconSide} />
        </SidebarItem>
        <SidebarItem current={page === "train"} pathname="/train">
          <MdMenuBook className={styles.iconSide} />
        </SidebarItem>
        <li>
          <button type="button" onClick={handleExitClick}>
            Вихід
          </button>
        </li>
        <li>
          <button type="button">
            <GrLanguage className={styles.iconSide} />
          </button>
        </li>
      </ul>
    </div>
  );
}
