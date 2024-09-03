"use client";

import React from "react";
import { VscHome } from "react-icons/vsc";
import { MdMenuBook } from "react-icons/md";
import SidebarItem from "./SidebarItem";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/");
  const page = segments[1];

  const handleExitClick = () => {
    router.push("/");
  };

  return (
    <aside className={styles.wrapSidebar}>
      <ul className={styles.wrapSideList}>
        <SidebarItem current={page === "liba"} pathname="/liba">
          <VscHome className={styles.iconSide} />
        </SidebarItem>
        <SidebarItem current={page === "train"} pathname="/train">
          <MdMenuBook className={styles.iconSide} />
        </SidebarItem>
      </ul>
      <button type="button" onClick={handleExitClick}>
        Вихід
      </button>
    </aside>
  );
}
