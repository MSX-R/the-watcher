import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Top10.css";

const Top10 = ({
  apiKEY, // DEL if process
  urlImage,
  moviesList,
  popularMovie,
  indexMovie,
  setIndexMovie,
  truncateValue,
  setTruncateValue,
  genresFilms,
  moviesPEGI,
  setMoviesPEGI,
}) => {
  const [moviePEGIUnique, setMoviePEGIUnique] = useState([]);

  // CALL TO PEGI
  let pegi = "N/A";
  useEffect(() => {
    const moviesPEGICall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${popularMovie.id}?api_key=${apiKEY}&append_to_response=videos,images,credits,release_dates&language=fr-FR`
        )
        .then((res) => res.data)
        .then((data) => setMoviePEGIUnique(data))
        .catch((err) => {
          console.log("Erreur détéctée", err);
        });
    };
    moviesPEGICall();
  }, [popularMovie.id]);

  // BUTTONS NAMING - en cours..
  const [buttonPreviousNaming, setButtonPreviousNaming] = useState([]);
  const [buttonNextNaming, setButtonNextNaming] = useState([]);

  // BUTTONS
  const handleChangePreviousMovie = () => {
    if (indexMovie <= 0) {
      setIndexMovie(moviesList);
      setButtonPreviousNaming(popularMovie[moviesList].title);
    } else if (indexMovie <= moviesList) {
      setIndexMovie(indexMovie - 1);
    }
    setTruncateValue(120);
  };

  const handleChangeNextMovie = () => {
    if (indexMovie >= moviesList) {
      setIndexMovie(0);
    } else if (indexMovie >= 0) {
      setIndexMovie(indexMovie + 1);
    }
    setTruncateValue(120);
  };

  const showTruncateText = () => {
    if (truncateValue === 120) {
      setTruncateValue(popularMovie.overview.length);
    } else if (truncateValue === popularMovie.overview.length) {
      setTruncateValue(120);
    }
  };

  return (
    <>
      <div
        className="top10Background"
        style={{
          backgroundImage: `url(${urlImage}${popularMovie.backdrop_path} )`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="top10Container">
          <div className="top10ContainerTopOverview">
            <div className="top10TitlePegiBloc">
              <h4 className="title titleCategory">Top 10 FILMS POPULAIRES</h4>
              <div className="top10RankingTitle">
                <h2 className="title top10Ranking">#{indexMovie + 1}</h2>

                <h2 className=" title top10Title">
                  {popularMovie.title ? popularMovie.title : popularMovie.name}
                </h2>
              </div>
              <p className=" top10Genres">
                {popularMovie.genre_ids
                  ? popularMovie.genre_ids
                      .map(
                        (movieGenre) =>
                          genresFilms.find(
                            (genreFilms) => genreFilms.id === movieGenre
                          ).name
                      )
                      .join(", ")
                  : ""}
              </p>
              {moviePEGIUnique.release_dates !== undefined &&
                moviePEGIUnique.release_dates.results.map((el) => {
                  if (el.iso_3166_1.includes("US")) {
                    if (el.release_dates[0].certification.length) {
                      pegi = el.release_dates[0].certification;
                    }
                  }
                })}
              <p className=" top10MovieCategory">{pegi}</p>
            </div>
            <img
              src={`${urlImage}${popularMovie.poster_path}`}
              alt={popularMovie.title ? popularMovie.title : popularMovie.name}
              className="posterTop10 "
            ></img>
          </div>

          <p className="description">
            {popularMovie.overview.length <= truncateValue
              ? popularMovie.overview
              : popularMovie.overview.slice(0, truncateValue)}{" "}
            <span className="showTheText" onClick={showTruncateText}>
              {truncateValue > 121 ? "... voir moins" : "... voir plus"}.
            </span>
          </p>

          <div className="buttons">
            <button onClick={() => handleChangePreviousMovie()}>
              Film précedent
            </button>
            <button onClick={() => handleChangeNextMovie()}>
              {" "}
              Film suivant
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top10;
