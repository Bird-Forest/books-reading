import styles from "@/components/liba/Library.module.css";

export default function LayoutLib({ children }: { children: React.ReactNode }) {
  return <div className={styles.libPage}>{children}</div>;
}
