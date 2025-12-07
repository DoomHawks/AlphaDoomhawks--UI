export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  country?: string;
  countryCode?: string;
  avatarUrl?: string;
  // Permissions & roles
  role?: UserRole;
  // Audit fields
  createdAt?: string; // ISO date from API
  updatedAt?: string; // ISO date from API
  isActive?: boolean;
}

export enum UserRole {
  Admin = "Admin",
  User = "User",
  Manager = "Manager",
}
