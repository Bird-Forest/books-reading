import React from "react";
import styles from "./Train.module.css";
import MyGoalRead from "./MyGoalRead";
import MyChart from "./MyChart";
import MyTraining from "./MyTraining";
import TrainListBooks from "./TrainListBooks";
// import TitlesOfTable from "./TitlesOfTable";
// import ItemBookEmpty from "./ItemBookEmpty";
// import MyListBooks from "./TrainListBooks";
// import { open_sans } from "@/app/fonts";

export default function TrainPanel() {
  return (
    <div className={styles.caseTrain}>
      <MyGoalRead />
      <div className={styles.wrapBlock}>
        <MyTraining />
        <TrainListBooks />
        <MyChart />
      </div>
    </div>
  );
}
