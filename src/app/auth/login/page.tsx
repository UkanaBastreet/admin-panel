import { FC } from "react";
import styles from "./LoginPage.module.css";
import { LoginForm } from "@/components/LoginForm/LoginForm";

const LoginPage: FC = () => {
  return (
    <div className={styles.LoginPage}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
