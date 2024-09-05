import React from "react";
import styles from "@/components/train/Train.module.css";
import NavigateTrain from "@/components/info/NavigateTrain";
import TrainPanel from "@/components/train/TrainPanel";
import ButtonMore from "@/components/button/ButtonMore";

export default function TargetPage() {
  return (
    <div className={styles.wrapTrainMob}>
      <NavigateTrain />
      <TrainPanel />
      <ButtonMore />
    </div>
  );
}
