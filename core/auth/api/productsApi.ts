// TODO: conectar mediante envs vars, Android e IOS

import { Platform } from "react-native";

const productsApi =
  Platform.OS === "android"
    ? "http://10.0.2.2:3000/api"
    : "http://localhost:3000/api";

// TODO: interceptors

export { productsApi };
