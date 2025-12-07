export interface ApiError {
  status: number;           // HTTP status code (400, 401, 500...)
  message: string;          // Main readable message
  errors?: Record<string, string[]>; // ModelState errors from .NET Core
  timestamp?: string;       // Optional: server timestamp
  path?: string;            // Optional: request path
}
