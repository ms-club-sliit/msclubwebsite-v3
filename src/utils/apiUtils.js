import axios from "axios";
import { BUILD_CONSTANTS } from "@/constants/build-constants";

const apiClient = axios.create({
    baseURL: BUILD_CONSTANTS.BACKEND_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 15000,
});

apiClient.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            return Promise.reject(
                new Error(`Server error: ${error.response.status}`)
            );
        }
        return Promise.reject(error);
    }
);

export default apiClient;
