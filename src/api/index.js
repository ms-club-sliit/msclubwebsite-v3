import axios from 'axios';

const BACKEND_URL = 'https://api.msclubsliit.org/';
const API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fms-club-of-sliit';

export const fetchBlogPosts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.items;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
}

export async function submitJoinForm(submissionData) {
    try {
        const response = await axios.post(
            `${BACKEND_URL}application`,
            submissionData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`Server error: ${error.response.status}`);
        }
        throw error;
    }
}