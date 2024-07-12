import type { AxiosInstance } from "axios";
import type Login from "~/utils/interfaces/login";

export default (httpClient: AxiosInstance) => ({
  login: async ({ email, password }: Login) => {
    const response = await httpClient.post("/login", {
      email,
      password,
    });

    return {
      data: response.data,
    };
  },
});
