import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {},
});

interface IGetRequest {
  endPoint: string;
  params?: any;
  data?: any;
}

interface IPostRequest {
  endPoint: string;
  body: {};
}

export const requestMethod = {
  get: ({ endPoint, params }: IGetRequest) => {
    return instance.get(endPoint, { ...params });
  },
  post: ({ endPoint, body }: IPostRequest) => {
    return instance.post(endPoint, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  patch: ({ endPoint, data, params }: IGetRequest) => {
    return instance.patch(endPoint, data, { ...params });
  },
  delete: ({ endPoint }: IGetRequest) => {
    return instance.delete(endPoint);
  },
};
