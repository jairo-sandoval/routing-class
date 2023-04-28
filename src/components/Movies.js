import React from 'react';

const Movies = ({movie, deleteMovie, selectMovie}) => {
    return (
        <li>
            <div>
                <h2>{movie.title}</h2>
                <h3>{movie.genre}</h3>
                <p>Descrition: {movie.media} Year: {movie.yearRelease}</p>
            </div>
            <button onClick={() => selectMovie(movie)}>Actualizar</button>
            <button onClick={() => deleteMovie(movie.id)}>Eliminar</button>
        </li>
    );
};

export default Movies;