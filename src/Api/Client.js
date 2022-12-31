import Axios from "axios";
import queryString from "query-string";

import apiConfig from "./apiConfig";

const Client = Axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  // paramsSerializer: (params) =>
  //   queryString.stringify({ ...params, api_key: apiConfig.apiKey }),

  paramsSerializer: {
    serialize: (params) =>
      queryString.stringify( { ...params,
        arrayFormat: "brackets", api_key: apiConfig.apiKey,
      }),
  },
});

Client.interceptors.request.use(async (config) => config);

Client.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default Client;
