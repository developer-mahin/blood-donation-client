import { baseApi } from "../../baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => ({
        url: "/user/my-profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMyProfileQuery } = userApi;
