import { getMyProfile } from "@/service/actions/getMyProfile";
import { useState, useEffect } from "react";

interface UserProfile {
  id: string;
  userId: string;
  bio: string;
  age: number;
  contactNumber: string;
  photo: string;
  lastDonationDate: string;
  createdAt: string;
  updatedAt: string;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  isDontate: boolean;
  isRequest: boolean;
  bloodType: string;
  location: string;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
  userProfile: UserProfile;
}

interface ProfileResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: UserData;
}

const useUserInfo = () => {
  const [userData, setUserData] = useState<ProfileResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUserInfoFromDB = async () => {
    try {
      setIsLoading(true);
      const data = await getMyProfile();
      setUserData(data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserInfoFromDB();
  }, []);

  return { userData: userData?.data, isLoading };
};

export default useUserInfo;
