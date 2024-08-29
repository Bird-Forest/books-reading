import React from "react";
import ButtonSubmit from "../button/ButtonSubmit";
import ButtonGoogl from "../button/ButtonGoogl";
import styles from "./Form.module.css";
import type { FormEventHandler } from "react";

export default function FormRegistr() {
  // const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);
  //   console.log(formData);

  //   //   const res = await signIn("credentials", {
  //   //     email: formData.get("email"),
  //   //     password: formData.get("password"),
  //   //     redirect: false,
  //   //   });

  //   //   if (res && !res.error) {
  //   //     router.push("/profile");
  //   //   } else {
  //   //     console.log(res);
  //   //   }
  // };
  return (
    <div className={styles.imgAuth}>
      <div className={styles.bgAuth}>
        <div className={styles.wrapForm}>
          <ButtonGoogl />
          <form className={styles.form}>
            <label htmlFor="name" className={styles.label}>
              <p className={styles.textLabel}>
                Ім’я<span className={styles.red}>{" *"}</span>
              </p>
              <input
                name="name"
                type="name"
                placeholder="..."
                required
                className={styles.input}
              />
            </label>
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
                placeholder="..."
                required
                className={styles.input}
              />
            </label>
            <label htmlFor="repeat" className={styles.label}>
              <p className={styles.textLabel}>
                Підтвердити пароль<span className={styles.red}>{" *"}</span>
              </p>
              <input
                name="repeat"
                type="password"
                placeholder="..."
                required
                className={styles.input}
              />
            </label>
            <ButtonSubmit>Увійти</ButtonSubmit>
            {/* {!auth ? " " : <p className={styles.authLink}>{mess}</p>} */}
          </form>
          <div className={styles.wrapLink}>
            <p className={styles.textLink}>Вже з нами?</p>
            <p className={styles.linkAuth}>Увійти</p>
          </div>
        </div>
      </div>
    </div>
  );
}
