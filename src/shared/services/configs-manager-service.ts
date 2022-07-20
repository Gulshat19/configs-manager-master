import axios from "axios";

const BASE_URL = "https://4b8ky6b79j.execute-api.us-east-1.amazonaws.com";
const STAGE = "default";
const URL = `${BASE_URL}/${STAGE}`;
const ENDPOINTS = {
  configs: `${URL}/configs`,
};

interface Response<T> {
  data: T;
}
type ResponsePromise<T> = Promise<Response<T>>;

export const getConfigs = (): ResponsePromise<Config[]> => {
  return axios.get(ENDPOINTS.configs).then((res) => res.data);
};

export const getConfig = (id: string): ResponsePromise<Config> => {
  return axios
    .get(ENDPOINTS.configs, {
      params: {
        id,
      },
    })
    .then((res) => res.data);
};

export const createConfig = (config: Config): ResponsePromise<Config> => {
  return axios
    .post(ENDPOINTS.configs, {
      body: {
        config,
      },
    })
    .then((res) => res.data);
};

export const replaceConfig = (
  id: string,
  config: Config
): ResponsePromise<Config> => {
  return axios
    .put(ENDPOINTS.configs, {
      params: {
        id,
      },
      body: {
        config,
      },
    })
    .then((res) => res.data);
};

export const deleteConfig = (id: string): ResponsePromise<Config> => {
  return axios
    .delete(ENDPOINTS.configs, {
      params: {
        id,
      },
    })
    .then((res) => res.data);
};
