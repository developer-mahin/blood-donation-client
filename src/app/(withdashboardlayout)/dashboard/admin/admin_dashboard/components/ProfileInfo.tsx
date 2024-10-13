"use client";

import assets from "@/assets/assets";
import {
  useGetAllDonorQuery,
  useGetAlUserQuery,
  useGetMyProfileQuery,
} from "@/redux/api/Features/user/userApi";
import Image from "next/image";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import GaugeChart from "@/components/Charts/GaugeChart";

const ProfileInfo = () => {
  const { data: profile } = useGetMyProfileQuery({});
  const { data: allUser } = useGetAlUserQuery({});
  const { data: allDonor } = useGetAllDonorQuery({});

  const allUserChatSettings = {
    width: 150,
    height: 150,
    value: allUser?.meta?.total,
    stopColor1: "#FFB500",
    stopColor2: "#FF005C",
  };

  const allDonorChatSettings = {
    width: 150,
    height: 150,
    value: allDonor?.length,
    stopColor1: "#00c6fb",
    stopColor2: "#005bea",
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="bg-[#FFFFFF] p-6 rounded-xl col-span-7 h-fit shadow-lg">
        <div className="flex items-center gap-x-3">
          <div className="size-20 bg-gradient-to-tl from-[#00c6fb]  to-[#005bea] flex items-center justify-center rounded-full">
            <Image
              src={profile?.userProfile?.photo}
              alt=""
              width={500}
              height={300}
              className="size-[70px] object-cover rounded-full"
            />
          </div>
          <div>
            <p className="font-medium">Welcome Back</p>
            <p className="text-2xl font-semibold ">{profile?.name}</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 lg:gap-y-0 gap-y-5">
          <div className="lg:col-span-9"></div>
          <div className="lg:col-span-3">
            <Image
              src={assets.images.welcome}
              alt=""
              width={500}
              height={300}
              className="lg:w-[350px]"
            />
          </div>
        </div>
      </div>

      <div className="col-span-5 grid grid-cols-2 gap-6">
        <div className="bg-[#FFFFFF] p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-center">
            <GaugeChart settings={allUserChatSettings} />
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-medium">{allUser?.meta?.total}</h2>
            <p>Active Users</p>
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-center">
            <GaugeChart settings={allDonorChatSettings} />
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-medium">{allDonor?.length}</h2>
            <p>Active Donor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
