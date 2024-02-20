import { useState, useEffect, useContext, createContext } from 'react';
import * as api from '../services/movieApi';

const MovieListContext = createContext();

export const useMovieList = () => {
    return useContext(MovieListContext);
}

export const MovieListProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMovies('');
    }, []);

    const fetchMovies = async (searchQuery) => {
        try {
            const data = await api.fetchMovies(searchQuery);
            setMovies(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const contextValue = {
        movies,
        loading,
        error,
        refetchMovies: fetchMovies
    };

    return (
        <MovieListContext.Provider value={contextValue}>
            {children}
        </MovieListContext.Provider>
    )
}