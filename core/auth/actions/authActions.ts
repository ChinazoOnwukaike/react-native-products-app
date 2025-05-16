import { productsApi } from "../api/productsApi";
import { User } from "../interfaces/user";

export interface AuthResponse {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

// For Android in emulator

const returnUserToken = (data: AuthResponse): { user: User; token: string } => {
  // const { id, email, fullName, isActive, roles, token } = data;
  const { token, ...user } = data;

  // const user: User = {
  //   id,
  //   email,
  //   fullName,
  //   isActive,
  //   roles,
  // };

  return { user, token };
};

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();

  try {
    const response = await fetch(`${productsApi}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      return returnUserToken(await response.json());
    } else {
      throw new Error("User and/or password not valid");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Login failed");
  }
};

export const authCheckStatus = async () => {
  try {
    const response = await fetch(`${productsApi}/auth/check-status`, {
      method: "GET",
    });

    if (response.ok) {
      return returnUserToken(await response.json());
    } else {
      throw new Error("status check unavailable");
    }
  } catch (error) {
    return null;
  }
};

// TODO: Register
