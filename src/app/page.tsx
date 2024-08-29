import styles from "../components/info/Main.module.css";
import MainInfo from "@/components/info/MainInfo";

export default function Home() {
  return (
    <section className={styles.pageMain}>
      <MainInfo />
    </section>
  );
}

// export default function Home() {
//   return (
//     <section className={styles.pageMain}>
//       <MainInfo />
//     </section>
//   );
// }

// export default function Home() {
//   return (
//     <section className={styles.pageLogin}>
//       <FormaLogin />
//       <Quotation />
//     </section>
//   );
// }
