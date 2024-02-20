import React from 'react'
import { useMovieList } from '../hooks/useMovieList'
import Movie from './Movie'
import FilterBox from './FilterBox'

import { Grid } from '@mui/material'

const MovieList = () => {
const { movies, loading, error } = useMovieList();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching movies: {error.message}</p>
    }

    return (
        <div className='mt-24'>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <FilterBox />
                </Grid>
                <Grid item xs={9}>
                    <Grid container>
                        {movies.map((movie, index) => (
                            <Grid item xs={4} key={index}>
                                <Movie movie={movie} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}

export default MovieList;