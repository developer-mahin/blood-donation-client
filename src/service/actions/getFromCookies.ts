"use server";

import { authKey } from "@/constant/common";
import { cookies } from "next/headers";

export const getFromCookies = () => {
  return cookies().get(authKey);
};
