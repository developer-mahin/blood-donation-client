"use server";

import { authKey } from "@/constant/common";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const setAccessToken = (
  token: string,
  option?: {
    redirect: string | undefined;
  }
) => {

  console.log(token)


  if (token) {
    cookies().set(authKey, token);
  }

  if (option && option.redirect) {
    redirect(option.redirect);
  }
};

export default setAccessToken;
