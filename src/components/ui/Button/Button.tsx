"use client";
import styles from "./Button.module.css";

import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  elSize?: "common" | "small" | "big";
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={styles.Button}>{children}</button>;
};
