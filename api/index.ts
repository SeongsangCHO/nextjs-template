import axios from "axios";
import { IAxiosRequestConfig, instance } from "./instances";

export const requestMethod = {
  get: ({ url, params }: IAxiosRequestConfig) => {
    return instance.get(url, {
      params: { ...params },
      validateStatus: function (status) {
        // 상태 코드가 400 이상일 경우 거부. 나머지(400보다 작은)는 허용.
        return status < 400;
      },
    });
  },
  post: ({ url, body }: IAxiosRequestConfig) => {
    return instance.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
      validateStatus: function (status) {
        // 상태 코드가 500 이상일 경우 거부. 나머지(500보다 작은)는 허용.
        return status < 400;
      },
    });
  },
  patch: ({ url, data, params }: IAxiosRequestConfig) => {
    return instance.patch(url, data, { params: { ...params } });
  },
  delete: ({ url }: IAxiosRequestConfig) => {
    return instance.delete(url);
  },
  postFile: ({ url, body }: IAxiosRequestConfig) => {
    return instance.post(url, body, {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
      },
      validateStatus: function (status) {
        // 상태 코드가 500 이상일 경우 거부. 나머지(500보다 작은)는 허용.
        return status < 400;
      },
    });
  },
};
