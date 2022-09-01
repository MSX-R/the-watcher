import React from "react";
import "./Row.css";

const Row2 = ({ title, moviesList, urlImage }) => {
  console.log( `Chargement des 20 premiers films du genre :  ${title}`, moviesList);
  return (
    <div className="row">
      <h2 className="title rowTitle"> {title}</h2>
      <div className="rowPosters">
        {moviesList
          ? moviesList.map((movie, index) => (
              <div key={index} className="rowCard">
                <img
                  src={`${urlImage}${movie.poster_path || movie.backdrop_path}`}
                  // J'aimerai diffuser ici, dans liste de recherhe les photos des personnes
                  alt={movie.title ? movie.title : movie.name}
                  className="poster posterRow"
                ></img>
                <p>{movie.title || movie.name} </p>
              </div>
            ))
          : "nope"}
      </div>
    </div>
  );
};

export default Row2;
