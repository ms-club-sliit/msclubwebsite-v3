import apiClient from "@/utils/apiUtils";
import axios from "axios";
import { BUILD_CONSTANTS } from "@/constants/build-constants";
import {JOIN_API_ENDPOINT} from "@/constants/apiConstants";

export const fetchBlogPosts = async () => {
    try {
        const response = await axios.get(BUILD_CONSTANTS.BLOG_API_URL);
        return response.data.items;
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        throw error;
    }
};

export const submitJoinForm = async (submissionData) => {
    const response = await apiClient.post(JOIN_API_ENDPOINT, submissionData);
    return response.data;
};
