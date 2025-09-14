import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  elSize?: "common" | "small" | "big";
}

const Input: FC<InputProps> = ({ size, className, ...props }) => {
  const classNames = styles.Input + " " + className + " " + size;
  return <input {...props} className={classNames} />;
};

export default Input;
