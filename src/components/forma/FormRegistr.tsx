"use client";

import React from "react";
import ButtonSubmit from "../button/ButtonSubmit";
import ButtonGoogl from "../button/ButtonGoogl";
import styles from "./Form.module.css";
import Link from "next/link";
import { registerUser } from "@/services/users";
import { useFormState } from "react-dom";

export default function FormRegistr() {
  const [state, action] = useFormState(registerUser, undefined);
  console.log(state);

  return (
    <div className={styles.imgAuth}>
      <div className={styles.bgAuth}>
        <div className={styles.wrapForm}>
          <ButtonGoogl />
          <form action={action} className={styles.form}>
            <div className={styles.wrapField}>
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
              {state?.errors?.name && (
                <p className={styles.textError}>{state.errors.name}</p>
              )}
            </div>
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
                  placeholder="..."
                  required
                  className={styles.input}
                />
              </label>
              {state?.errors?.pwd && (
                <p className={styles.textError}>{state.errors.pwd}</p>
              )}
            </div>
            <div className={styles.wrapField}>
              <label htmlFor="confirmPwd" className={styles.label}>
                <p className={styles.textLabel}>
                  Підтвердити пароль<span className={styles.red}>{" *"}</span>
                </p>
                <input
                  name="confirmPwd"
                  type="confirmPwd"
                  placeholder="..."
                  required
                  className={styles.input}
                />
              </label>
              {state?.errors?.confirmPwd && (
                <p className={styles.textError}>{state.errors.confirmPwd}</p>
              )}
            </div>
            <div className={styles.wrapFieldBtn}>
              <div className={styles.wrapTextMess}>
                {state?.message && (
                  <p className={styles.textMess}>{state.message}</p>
                )}
              </div>
              <ButtonSubmit>Зареєструватися</ButtonSubmit>
            </div>
          </form>
          <div className={styles.wrapLink}>
            <p className={styles.textLink}>Вже з нами?</p>
            <Link href="/signin" className={styles.linkAuth}>
              Увійти
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//  {
//    state?.errors?.pwd && (
//      <div>
//        <p>Password must:</p>
//        <ul>
//          {state.errors.pwd.map((error) => (
//            <li key={error}>- {error}</li>
//          ))}
//        </ul>
//      </div>
//    );
//  }

// {
//   state?.errors?.confirmPwd && (
//     <div>
//       <p>Password must:</p>
//       <ul>
//         {state.errors.confirmPwd.map((error) => (
//           <li key={error}>- {error}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function SubmitButton() {
//   const { pending } = useFormStatus();

//   return (
//     <button disabled={pending} type="submit">
//       Sign Up
//     </button>
//   );
// }
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
//  {
//    /* {!auth ? " " : <p className={styles.authLink}>{mess}</p>} */
//  }
