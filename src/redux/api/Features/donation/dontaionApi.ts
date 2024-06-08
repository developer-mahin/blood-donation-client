import { baseApi } from "../../baseApi";
import { tagTypes } from "../../tagTypes";

export const donationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyDonationRequest: build.query({
      query: () => {
        return {
          url: `/donor/my-donation-request`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.donor],
    }),

    getMyDonation: build.query({
      query: () => {
        return {
          url: `/donor/my-donation`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.donor],
    }),

    createDonationRequest: build.mutation({
      query: (payload) => {
        return {
          url: `/donor/create-donation-request`,
          method: "POST",
          data: payload,
        };
      },
      invalidatesTags: [tagTypes.donor],
    }),

    changeDonationRequestStatus: build.mutation({
      query: (payload) => {
        return {
          url: `/donor/donation-request/${payload.id}`,
          method: "PUT",
          data: payload,
        };
      },
      invalidatesTags: [tagTypes.donor],
    }),
  }),
});

export const {
  useCreateDonationRequestMutation,
  useGetMyDonationRequestQuery,
  useGetMyDonationQuery,
  useChangeDonationRequestStatusMutation,
} = donationApi;
