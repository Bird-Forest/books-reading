import React from "react";
import styles from "../../components/forma/Form.module.css";
import FormRegistr from "@/components/forma/FormRegistr";
import Information from "@/components/info/Information";

export default function RegistrPage() {
  return (
    <div className={styles.pageAuth}>
      <FormRegistr />
      <div className={styles.wrapSignInfo}>
        <Information />
      </div>
    </div>
  );
}
