import { FC } from "react";
import styles from "./RegisterPage.module.css";
import { RegisterForm } from "@/components/RegisterForm/RegisterForm";

const RegisterPage: FC = () => {
  return (
    <div className={styles.RegisterPage}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
