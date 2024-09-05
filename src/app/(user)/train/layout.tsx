import styles from "@/components/train/Train.module.css";

export default function LayoutTrain({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.trainPage}>{children}</div>;
}
