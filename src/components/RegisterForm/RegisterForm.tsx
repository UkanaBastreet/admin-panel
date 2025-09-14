"use client";
import { register } from "@/app/auth/auth.action";
import { useState } from "react";
import Input from "../ui/Input/Input";
import { Button } from "../ui/Button/Button";
import styles from "./RegisterForm.module.css";
import Alert from "../ui/Alert/Alert";
import Link from "next/link";

export const RegisterForm = () => {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");
  async function handleRegister(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    setFetching(true);
    try {
      await register({ email, password });
    } catch (e) {
      setFetching(false);
      setError(e instanceof Error ? e.message : "Failed to login");
    }
  }
  return (
    <form action={handleRegister} className={styles.RegisterForm}>
      <h2>Register</h2>
      <Link href={'/auth/login'}>login</Link>
      <Input type="text" name="username" placeholder="username" />
      <Input type="email" name="email" placeholder="email" />
      <Input type="password" name="password" placeholder="password" />
      <Button type="submit">{fetching ? "loading..." : "login"}</Button>
      {error && <Alert title="Failed to login" text={error} color="red" />}
    </form>
  );
};
