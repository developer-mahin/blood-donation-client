import { baseurl } from "@/constant/URL";
import setAccessToken from "@/utils/setCookies";

export type TLoginProps = {
  email: string;
  password: string;
};

export const loginUser = async (payload: TLoginProps) => {
  const res = await fetch(`${baseurl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  const loginInfo = await res.json();

  if (loginInfo.data.accessToken) {
    setAccessToken(loginInfo.data.accessToken);
  }

  return loginInfo;
};
