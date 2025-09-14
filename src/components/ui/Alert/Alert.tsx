import { FC } from "react";
import styles from "./Alert.module.css";

interface AlertProps {
  title?: string;
  text: string;
  color?: "red" | "yellow" | "blue" | "gray";
}

const Alert: FC<AlertProps> = ({ text, title, color = "gray" }) => {
  return (
    <div className={styles.Alert + " " + styles[color]}>
      {title && <><b>{title}</b><hr/></>}
      <p>{text}</p>
    </div>
  );
};

export default Alert;
