import { axiosBaseQuery } from "@/helper/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "./tagTypes";
import { baseurl } from "@/constant/URL";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: `https://blooddonationserverv2.vercel.app/api/v1`,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
