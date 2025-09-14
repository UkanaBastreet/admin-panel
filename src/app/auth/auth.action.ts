"use server";

import { loginParams, registerParams, authApi } from "@/storage/firabase";

export async function login(params: loginParams) {
  const res = await authApi.login(params);
  return res;
}

export async function register(params: registerParams) {
  const res = await authApi.register(params);
  return res;
}
