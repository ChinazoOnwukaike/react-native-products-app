import { create } from "zustand";
import { User } from "@/core/auth/interfaces/user";
import { authLogin } from "@/core/auth/actions/authActions";

export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set) => ({
  // Properties
  status: "checking",
  token: undefined,
  user: undefined,

  // Actions
  login: async (email: string, password: string) => {
    const res = await authLogin(email, password);

    if (!res) {
      set({ status: "unauthenticated", token: undefined, user: undefined });
      return false;
    }

    set({
      status: "authenticated",
      token: res.token,
      user: res.user,
    });

    // Guardar el token en el secure storage

    return true;
  },
  checkStatus: async () => {},
  logout: async () => {},
}));
