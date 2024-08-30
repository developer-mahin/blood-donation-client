"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type TProps = {
  redirect: string;
};

const RedirectInLoginPage = ({ redirect }: TProps) => {
  const router = useRouter();
  useEffect(() => {
    router.push(redirect);
  }, [redirect, router]);

  return null;
};

export default RedirectInLoginPage;
