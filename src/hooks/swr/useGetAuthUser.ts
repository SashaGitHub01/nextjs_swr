import { ProfileApi } from "@src/API/ProfileApi";
import { KEYS } from "@src/constants/keys";
import { LocalStorageHelper } from "@src/utils/LocalStorageHelper";
import useSWR from "swr/immutable";

export const useGetAuthUser = () => {
  const data = useSWR(KEYS.auth, () => {
    const key = LocalStorageHelper.getApiKey();
    if (key) {
      return ProfileApi.getProfile(key);
    }
  });

  return data;
};
