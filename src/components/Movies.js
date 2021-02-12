import React from 'react';
import { movies } from '../data';

const Movies = () => {

  // const renderMovie = (moviedata) => {
  //   moviedata.map(movie => {
  //     <h2>
  //   })
  // }

  return (
    <div>
        <h1>Movies Page</h1>
        {/* {renderMovie(movies)} */}
        {movies.map((movie, index) => (
          <div key={index}>
            <h3>Name: {movie.title}</h3>
            <p>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
