import { Fragment, useState } from 'react';
import MovieCard from './MovieCard';
import style from '../style/MoviedexApp.module.css';
import MovieForms from './MovieForms';

function MoviedexApp() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (newMovie) => {
    const movieWithDefaults = {
      ...newMovie,
      id: newMovie.id || Date.now().toString(),
      isWatched: newMovie.isWatched ?? false,
    };
    setMovies((prev) => [movieWithDefaults, ...prev]);
  };

  const handleToggleWatched = (targetId) => {
    const toggledMovies = movies.map((movie) => {
      if (movie.id === targetId) {
        return { ...movie, isWatched: !movie.isWatched };
      }
      return movie;
    });

    setMovies(toggledMovies);
  };

  const handleDelete = (targetId) => {
    const filteredMovies = movies.filter((movie) => movie.id !== targetId);
    setMovies(filteredMovies);
  };

  return (
    <Fragment>
      <MovieForms onAddMovie={handleAddMovie} />
      {movies.length === 0 ? (
        <p>Your Moviedex is empty! Add a movie above.</p>
      ) : (
        <div className={style['card-grid']}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDelete={handleDelete}
              onToggleWatched={handleToggleWatched}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default MoviedexApp;
