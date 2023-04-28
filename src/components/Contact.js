import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Movies from './Movies';
import CreateMovie from './CreateMovie';

const moviesData = [
    {
        id: 1,
        title: 'Batman',
        genre: 'Action',
        media: 'HBO',
        yearRelease: 2020
    },
    {
        id: 2,
        title: 'Ve for vendetta',
        genre: 'Action',
        media: 'Nexflix',
        yearRelease: 2002
    },
    {
        id: 3,
        title: 'Merlina',
        genre: 'Comedy',
        media: 'Nextflix',
        yearRelease: 2022
    },
    {
        id: 4,
        title: 'Rick and Morty',
        genre: 'Comedy',
        media: 'HBO',
        yearRelease: 2015
    },
]

const Contact = () => {
    const [name, setName] = useState('')
    const [movies, setMovies ] = useState(moviesData)
    const [movieSelected, setMovieSelected] = useState(0)
    const navigator = useNavigate()

    // const submitForm = (e) => {
    //     e.preventDefault()
    //     if(!name){
    //         return
    //     }

    //     navigator('/Home')
    // }

    const selectMovie = (id) => {
        setMovieSelected(id)
    }


    const deleteMovie = (id) => {
        const moviesFiltered = movies.filter(movie => movie.id !== id)

        setMovies(moviesFiltered)
    }

    return (
        <div>
            {/* <h2>Contact</h2>
            <div>
                <form onSubmit={(e) => submitForm(e)}>
                    <label>nombre: </label>
                    <input 
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type='submit'>Subir contacto</button>
                </form>
            </div> */}
            <ul>
                {
                    movies.map(movie => 
                        <Movies 
                            key={movie.id} 
                            movie={movie}
                            deleteMovie={deleteMovie}
                            selectMovie={selectMovie}
                        />)
                }

            </ul>
            <CreateMovie 
                movieSelected={movieSelected}
                movies={movies} 
                setMovies={setMovies}
            />

        </div>
    );
};

export default Contact;