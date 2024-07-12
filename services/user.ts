import type { AxiosInstance } from "axios";
import type Login from "~/utils/interfaces/login";

export default (httpClient: AxiosInstance) => ({
  create: async ({ name, email, password }: Login) => {
    const response = await httpClient.post("/user/create", {
      name,
      email,
      password,
    });

    return {
      data: response.data,
    };
  },
});
