import axios, { AxiosError, AxiosRequestConfig } from "axios";
import getConfig from "next/config";
// import { store } from "store/redux/store";

export interface IAxiosRequestConfig extends Omit<AxiosRequestConfig, "url"> {
  url: string;
  body?: any;
}

export const instance = axios.create({
  baseURL: getConfig().publicRuntimeConfig.BASE_URL,
  headers: {},
});

const responseErrorHandler = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

// 요청을 보내기 전에 수행할 일
instance.interceptors.request.use(
  function (config: any) {
    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    return Promise.reject(error);
  },
);

// 응답 받고 수행할 일
instance.interceptors.response.use(function (response) {
  return response;
}, responseErrorHandler);
