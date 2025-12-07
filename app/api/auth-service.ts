import { LoginRequest, LoginResponse } from "../models/auth";
import { tokenStorage } from "../storage/token-storage";
import api from "./api-client";

const AuthService = {
  login: async (payload: LoginRequest): Promise<LoginResponse> => {
    const res = await api.post<LoginResponse>("/auth/login", payload);

    // Store tokens
    await tokenStorage.setTokens(res.data.accessToken, res.data.refreshToken);

    return res.data;
  },

  logout: async () => {
    await tokenStorage.clear();
  },
};

export default AuthService;
