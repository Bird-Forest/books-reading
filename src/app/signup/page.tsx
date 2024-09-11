import React from "react";
import styles from "../../components/forma/Form.module.css";
import FormRegistr from "@/components/forma/FormRegistr";
import Information from "@/components/info/Information";
import { auth } from "@/auth";
import { IUser } from "@/types/user";
import { Session } from "next-auth";
// import { SessionProps } from "@/types/session";

// export interface Session {
//   user?: IUser;
//   expires: string;
// }

export default async function RegistrPage() {
  const session: Session | null = await auth();
  console.log("RegistrPage", session);
  return (
    <div className={styles.pageAuth}>
      <FormRegistr />
      <div className={styles.wrapSignInfo}>
        <Information />
      </div>
    </div>
  );
}
