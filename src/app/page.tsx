import { FirebaseConnectForm } from "@/components/FirebaseConnectForm";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.HomePage}>
      <FirebaseConnectForm />
    </div>
  );
}
