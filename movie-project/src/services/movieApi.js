import axios from 'axios';

const API_URL = 'https://localhost:7215';

export const fetchMovies = async (searchQuery) => {
    try{
        const response = await axios.get(`${API_URL}/details?searchTerm=${searchQuery}`);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}