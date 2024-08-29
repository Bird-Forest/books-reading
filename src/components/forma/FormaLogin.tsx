"use client";

import React from "react";
import styles from "./Form.module.css";
import ButtonSubmit from "../button/ButtonSubmit";
import type { FormEventHandler } from "react";
import ButtonGoogl from "../button/ButtonGoogl";
// import { useRouter } from "next/router";

// interface User {
//   id?: string;
//   name?: string;
//   email: string;
//   password: string;
//   createdAt?: Date;
// }

export default function FormaLogin() {
  //   const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    //   const res = await signIn("credentials", {
    //     email: formData.get("email"),
    //     password: formData.get("password"),
    //     redirect: false,
    //   });

    //   if (res && !res.error) {
    //     router.push("/profile");
    //   } else {
    //     console.log(res);
    //   }
  };
  return (
    <div className={styles.imgLogin}>
      <div className={styles.bgLogin}>
        <div className={styles.wrapForm}>
          <ButtonGoogl />
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="email" className={styles.label}>
              <p className={styles.textLabel}>
                Електронна адреса<span className={styles.red}>{" *"}</span>
              </p>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className={styles.input}
              />
            </label>
            <label htmlFor="password" className={styles.label}>
              <p className={styles.textLabel}>
                Пароль<span className={styles.red}>{" *"}</span>
              </p>
              <input
                name="password"
                type="password"
                placeholder="Пароль"
                required
                className={styles.input}
              />
            </label>
            <ButtonSubmit>Увійти</ButtonSubmit>
            {/* {!auth ? " " : <p className={styles.authLink}>{mess}</p>} */}
          </form>
          <p className={styles.linkAuth}>Реєстрація</p>
        </div>
      </div>
    </div>
  );
}
