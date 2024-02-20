import React from 'react'
import '../styles/MovieStyles.css'
import { Paper } from '@mui/material'

const Movie = ({ movie }) => {
    const title = movie.title;
    const imageURL = `https://image.tmdb.org/t/p/w500/${movie.imageURL}`;

    return (
        <Paper elevation={8} className='hover:bottom-0 w-[20vw] max-w-full overflow-hidden h-[62vh] border bg-slate-100 text-center items-center justify-center text-[1.4rem] font-bold relative m-1 border-solid'>
            <img 
                className='h-auto block w-full max-w-full' 
                src={imageURL}
                alt = ""
            >
            </img>
            <div className='hover:bottom-0 absolute bg-[rgba(0,0,0,0.8)] text-white transition-[bottom] duration-[0.3s] ease-[ease] -bottom-2/4'>
                <div>{title}</div>
            </div>
        </Paper>
    )
}

export default Movie;