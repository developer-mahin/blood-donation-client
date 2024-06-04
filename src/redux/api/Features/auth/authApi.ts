import { baseApi } from "../../baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    changePassword: build.mutation({
      query: (payload) => {
        return {
          url: `/auth/change-password`,
          method: "POST",
          data: payload,
        };
      },
    }),
  }),
});

export const { useChangePasswordMutation } = userApi;
