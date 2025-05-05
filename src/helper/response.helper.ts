import envConfig from "../config/env.config";
interface Response {
  code: string;
  message: string;
  data: any;
}

const response = (code: string, message: string, data: any): Response => {
  return {
    code: code,
    message:
      envConfig.env().APP_FOR == "prod" && code == "500"
        ? "Internal Server Error - Backend Server"
        : message,
    data: data,
  } as Response;
};

export { response };
