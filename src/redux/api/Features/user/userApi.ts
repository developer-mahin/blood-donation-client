import { TQueryParams } from "@/types";
import { baseApi } from "../../baseApi";
import { tagTypes } from "../../tagTypes";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAlUser: build.query({
      query: (args) => {
        const params = new URLSearchParams();

        args?.forEach((item: TQueryParams) => {
          params.append(item.name, item.value as string);
        });

        return {
          url: "/user/get-all-user",
          method: "GET",
          params: params,
        };
      },
      providesTags: [tagTypes.user],
    }),

    getAllDonor: build.query({
      query: () => ({
        url: "/donor/donor-list",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    getMyProfile: build.query({
      query: () => ({
        url: "/user/my-profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    updateMyProfile: build.mutation({
      query: (payload) => {
        return {
          url: `/user/update-profile`,
          method: "PATCH",
          data: payload,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),

    changeUserProfileStatus: build.mutation({
      query: (payload) => {
        return {
          url: `/user/update-status/${payload.id}`,
          method: "PATCH",
          data: payload,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),

    changeUserRole: build.mutation({
      query: (payload) => {
        return {
          url: `/user/update-role/${payload.id}`,
          method: "PATCH",
          data: payload,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useGetAlUserQuery,
  useUpdateMyProfileMutation,
  useChangeUserProfileStatusMutation,
  useChangeUserRoleMutation,
  useGetAllDonorQuery,
} = userApi;
