import React from "react";
import styles from "../../components/forma/Form.module.css";
import FormRegistr from "@/components/forma/FormRegistr";
import Information from "@/components/forma/Information";

export default function RegistrPage() {
  return (
    <div className={styles.pageAuth}>
      <FormRegistr />
      <Information />
    </div>
  );
}
