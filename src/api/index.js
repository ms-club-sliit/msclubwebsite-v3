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
        const response = await fetch(`${BACKEND_URL}application`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submissionData),
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}