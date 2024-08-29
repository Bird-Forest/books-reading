import React from "react";
import styles from "../../components/forma/Form.module.css";
import FormaLogin from "@/components/forma/FormaLogin";
import Quotation from "@/components/forma/Quotation";

export default function LoginPage() {
  return (
    <div className={styles.pageLogin}>
      <FormaLogin />
      <Quotation />
    </div>
  );
}
