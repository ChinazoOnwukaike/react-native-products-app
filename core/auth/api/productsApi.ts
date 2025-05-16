import axios from "axios";

// TODO: conectar mediante envs vars, Android e IOS

const productsApi = axios.create({
  baseURL: "localhost:300/api",
});

// TODO: interceptors

export { productsApi };
