

import axios from "axios";

const api = axios.create({ baseURL: "https://projeto2base.onrender.com/api" });

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization:
      "Bearer 520674592108addcb3f7a8c18c7f5d2473613df7d98d373b48efd60ac291da0d9874fc8357ea5477743b09abd671eb75ba6d352c8e78a1f69106faf4ac76293552071ec85d16eb43218f2343930ab1f5cf19ebff0baef84b0322d868ea389defa17b958e4dcbb3d588931c8c1f802c12f3e8e7afe777953ce7e3e977e8121c5b",
  };
  return config
});

export { api };