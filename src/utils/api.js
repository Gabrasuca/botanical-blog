// inserir a URL da api
// xxxx = URL
// 123456 = token

import axios from "axios";

const api = axios.create({ baseURL: "xxx " });

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization:
      "Bearer 123456",
  };
  return config
});

export { api };