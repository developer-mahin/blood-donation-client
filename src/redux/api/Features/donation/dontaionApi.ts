import { baseApi } from "../../baseApi";
import { tagTypes } from "../../tagTypes";

export const donationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDonationRequest: build.mutation({
      query: (payload) => {
        return {
          url: `/donor/create-donation-request`,
          method: "POST",
          data: payload,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useCreateDonationRequestMutation } = donationApi;
