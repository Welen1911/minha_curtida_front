import type { AxiosInstance } from "axios";
import Login from "~/utils/interfaces/login";

export default (httpClient: AxiosInstance) => ({
    login: async ({email, password}: Login) => {
        const response: Object = await httpClient.post('/login', {
            email,
            password
        });

        return {
            response.data
        };
    }
});