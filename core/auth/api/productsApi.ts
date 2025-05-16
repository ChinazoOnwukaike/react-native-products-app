// TODO: conectar mediante envs vars, Android e IOS

import { Platform } from "react-native";

const productsApi =
  Platform.OS === "android"
    ? "http://10.0.2.2:3003/api"
    : "http://localhost:3003/api";

// TODO: interceptors

export { productsApi };
