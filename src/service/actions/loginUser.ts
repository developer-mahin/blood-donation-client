"use server"

import { baseurl } from "@/constant/URL";
import setAccessToken from "@/utils/setCookies";

export type TLoginProps = {
  email: string;
  password: string;
};

export const loginUser = async (
  payload: TLoginProps,
  redirect?: string | undefined
) => {
  const res = await fetch(`${baseurl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const data = await res.json();
  if (data.success && data?.data?.token) {
    setAccessToken(data?.data?.token, { redirect });
  }

  return data;
};
