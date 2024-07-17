"use server";

import { baseurl } from "@/constant/URL";
import { cookies } from "next/headers";

export const getMyProfile = async () => {
  const token = cookies().get("accessToken")?.value;

  const headers: HeadersInit = {};

  if (token) {
    headers["Authorization"] = `${token}`;
  }
  const res = await fetch(`${baseurl}/user/my-profile`, {
    headers: headers,
  });
  const data = await res.json();

  return data;
};
