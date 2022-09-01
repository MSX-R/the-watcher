import React from "react";
import "./RowTop40.css";

const Row = ({ title, moviesList, urlImage, classic = "", genresFilms }) => {
  return (
    <div className="row">
      <h2 className="title rowTitle"> {title}</h2>
      <div className={`rowPosters ${classic}`}>
        {moviesList
          ? moviesList.map((movie, index) => (
              <div key={index} className="rowCard">
                <img
                  src={`${urlImage}${movie.poster_path || movie.backdrop_path}`}
                  alt={movie.title ? movie.title : movie.name}
                  className="poster posterRow"
                ></img>
                <p className="rowMovieTitle">{movie.title || movie.name} </p>
                <p className="top40Genres">
                  {movie.genre_ids
                    ? movie.genre_ids
                        .map(
                          (movieGenre) =>
                            genresFilms.find(
                              (genreFilms) => genreFilms.id === movieGenre
                            ).name
                        )
                        .join(", ")
                    : ""}
                </p>
              </div>
            ))
          : "nope"}
      </div>
    </div>
  );
};

export default Row;
