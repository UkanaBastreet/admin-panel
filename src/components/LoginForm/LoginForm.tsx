"use client";
import { login } from "@/app/auth/auth.action";
import styles from "./LoginForm.module.css";
import { Button } from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { useState } from "react";
import Link from "next/link";
import Alert from "../ui/Alert/Alert";

export const LoginForm = () => {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    setFetching(true);
    try {
      await login({ email, password });
    } catch (e) {
      setFetching(false);
      setError(e instanceof Error ? e.message : "Failed to login");
    }
  }

  return (
    <div>
      <form action={handleLogin} className={styles.LoginForm}>
        <h2>Login</h2>
        <Link href={"/auth/register"}>register</Link>
        <Input type="email" name="email" placeholder="email" />
        <Input type="password" name="password" placeholder="password" />
        <Button type="submit">{fetching ? "loading..." : "login"}</Button>
        {error && <Alert title="Failed to login" text={error} color="red" />}
      </form>
    </div>
  );
};
