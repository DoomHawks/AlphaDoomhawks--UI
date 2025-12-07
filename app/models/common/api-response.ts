import { ApiError } from "./api-error";

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error: ApiError | null;
}
