import React from "react";
import styles from "@/components/train/Train.module.css";
// import MyTraining from "@/components/train/MyTraining";
// import MyGoalRead from "@/components/train/MyGoalRead";
// import MyListBooks from "@/components/train/MyListBooks";
import TrainPanel from "@/components/train/TrainPanel";

export default function TrainPage() {
  return (
    <section className={styles.trainPage}>
      <TrainPanel />
      {/* <MyGoalRead />
      <MyTraining />
      <MyListBooks /> */}
    </section>
  );
}
