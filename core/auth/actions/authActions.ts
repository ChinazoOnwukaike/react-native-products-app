import { User } from "../interfaces/user";

export interface AuthResponse {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

const returnUserToken = (data: AuthResponse) => {
  const { id, email, fullName, isActive, roles, token } = data;

  const user: User = {
    id,
    email,
    fullName,
    isActive,
    roles,
  };

  return { user, token };
};
