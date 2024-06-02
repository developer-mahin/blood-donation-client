import { authKey } from "@/constant/common";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { removeUserInfo } from "../auth.service";
import { removeCookies } from "./removeCookies";

export const logoutUser = (router: AppRouterInstance) => {
  removeUserInfo();
  removeCookies([authKey, "refreshToken"]);
  router.push("/");
  router.refresh();
};
