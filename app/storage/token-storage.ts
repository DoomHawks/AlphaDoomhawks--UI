import AsyncStorage from "@react-native-async-storage/async-storage";

const ACCESS_TOKEN = "ACCESS_TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";

export const tokenStorage = {
  setTokens: async (access: string, refresh: string) => {
    await AsyncStorage.multiSet([
      [ACCESS_TOKEN, access],
      [REFRESH_TOKEN, refresh],
    ]);
  },

  getAccessToken: async () => {
    return AsyncStorage.getItem(ACCESS_TOKEN);
  },

  getRefreshToken: async () => {
    return AsyncStorage.getItem(REFRESH_TOKEN);
  },

  clear: async () => {
    await AsyncStorage.multiRemove([ACCESS_TOKEN, REFRESH_TOKEN]);
  },
};
