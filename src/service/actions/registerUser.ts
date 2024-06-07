"use server";

import { baseurl } from "@/constant/URL";

export const registerUser = async (payload: any) => {
  const res = await fetch(`${baseurl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const userData = await res.json();
  return userData;
};
