"use client";

import React, { FormEventHandler, useState } from "react";
import styles from "./Form.module.css";
import ButtonSubmit from "../button/ButtonSubmit";
import ButtonGoogl from "../button/ButtonGoogl";
import Link from "next/link";
import { signIn } from "@/auth";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { loginUser } from "@/services/users";

export default function FormaLogin() {
  const [state, action] = useFormState(loginUser, undefined);
  console.log(state);
  // const [mess, setMess] = useState("");
  // console.log(mess);
  // const router = useRouter();

  // const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);

  //   const res = await signIn("credentials", {
  //     email: formData.get("email"),
  //     pwd: formData.get("pwd"),
  //     redirect: false,
  //   });

  //   if (res) {
  //     console.log(res);
  //     router.push("/liba");
  //   } else {
  //     console.log(res);
  //     // setMess(res);
  //   }
  // };
  return (
    <div className={styles.imgLogin}>
      <div className={styles.bgLogin}>
        <div className={styles.wrapForm}>
          <ButtonGoogl />
          <form action={action} className={styles.form}>
            <div className={styles.wrapField}>
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
              {state?.errors?.email && (
                <p className={styles.textError}>{state.errors.email}</p>
              )}
            </div>
            <div className={styles.wrapField}>
              <label htmlFor="pwd" className={styles.label}>
                <p className={styles.textLabel}>
                  Пароль<span className={styles.red}>{" *"}</span>
                </p>
                <input
                  name="pwd"
                  type="pwd"
                  placeholder="Пароль"
                  required
                  className={styles.input}
                />
              </label>
              {state?.errors?.pwd && (
                <p className={styles.textError}>{state.errors.pwd}</p>
              )}
            </div>
            <div className={styles.wrapFieldBtn}>
              <div className={styles.wrapTextMess}>
                {state?.message && (
                  <p className={styles.textMess}>{state.message}</p>
                )}
              </div>
              <ButtonSubmit>Увійти</ButtonSubmit>
            </div>
          </form>
          <Link href="/signup" className={styles.linkAuth}>
            Реєстрація
          </Link>
        </div>
      </div>
    </div>
  );
}

/* {state?.errors?.email && (
                <p className={styles.textError}>{state.errors.email}</p>
              )} */
/* {state?.errors?.pwd && (
                <p className={styles.textError}>{state.errors.pwd}</p>
              )} */
/* {state?.message && (
              <p className={styles.textMess}>{state.message}</p>
            )} */
