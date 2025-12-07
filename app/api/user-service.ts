import { User } from "../models/user/user";
import api from "./api-client";

const UserService = {
  getProfile: async (): Promise<User> => {
    const res = await api.get<User>("/user/profile");
    return res.data;
  },

  updateProfile: async (data: Partial<User>): Promise<User> => {
    const res = await api.put<User>("/user/profile", data);
    return res.data;
  },
};

export default UserService;