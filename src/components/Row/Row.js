import React from "react";
import "./Row.css";

const Row = ({ title, moviesList, urlImage, classic = "" }) => {
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
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Row;
