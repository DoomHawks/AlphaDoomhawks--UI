import { ApiError } from "@/app/models/common/api-error";
import { AxiosError } from "axios";

export function parseApiError(error: any): string {
  const axiosError = error as AxiosError<ApiError>;

  const msg =
    axiosError.response?.data?.message ||
    axiosError.message ||
    "Something went wrong";

  // Combine validation errors
  const modelErrors = axiosError.response?.data?.errors;
  if (modelErrors) {
    const combined = Object.values(modelErrors).flat().join("\n");
    return `${msg}\n${combined}`;
  }

  return msg;
}
