import React, { useEffect, useState } from 'react';

const CreateMovie = ({movieSelected, movies, setMovies}) => {
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [media, setMedia] = useState('')
    const [yearRelease, setYearRelease] = useState('')

    useEffect(() => {
        if(movieSelected){
            setTitle(movieSelected.title)
            setGenre(movieSelected.genre)
            setMedia(movieSelected.media)
            setYearRelease(movieSelected.yearRelease)
            //console.log(movieSelected)
        }
    }, [movieSelected])

    const cleanerInputs = () => {
        setTitle('')
        setGenre('')
        setMedia('')
        setYearRelease('')
    }

    const submitMovie = (e) => {
        e.preventDefault()

        const newMovie = {
            title,
            genre,
            media,
            yearRelease
        }

        if(movieSelected){
            const indexMovieSelectedFound = movies.findIndex(movie => movie.id === movieSelected.id)
            movies[indexMovieSelectedFound] = {id: movieSelected.id, ...newMovie}       
            cleanerInputs()
            return setMovies([...movies])
        }

        
        setMovies([...movies, {id: movies.length + 1, ...newMovie}])
        cleanerInputs()
    } 
 
    return (
        <form onSubmit={(e) => submitMovie(e)}>
            <div>
                <label>Titulo:</label>
                <input 
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Genry:</label>
                <input 
                    type='text'
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </div>
            <div>
                <label>Streaming Plataform:</label>
                <input 
                    type='text'
                    value={media}
                    onChange={(e) => setMedia(e.target.value)}
               />
            </div>
            <div>
                <label>Año:</label>
                <input 
                    type='number'
                    value={yearRelease}
                    onChange={(e) => setYearRelease(e.target.value)}
                />
            </div>
            <button type='submit'>{movieSelected ? 'Update Movie' : 'Add movie'}</button>
        </form>
    );
};

export default CreateMovie;