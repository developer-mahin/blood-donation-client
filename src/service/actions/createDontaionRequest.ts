"use server";

import { baseurl } from "@/constant/URL";
import { authKey } from "@/constant/common";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

const createDonationRequest = async (data: FieldValues) => {
  const token = cookies().get(authKey);
  const res = await fetch(`${baseurl}/donor/create-donation-request`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: token?.value || "",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const result = await res.json();
  return result;
};

export default createDonationRequest;
