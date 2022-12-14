import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Top10 from "../../components/Top10/Top10";
import Navbar from "../../components/Navbar/Navbar";
import Row from "../../components/Row/Row";
import RowTop40 from "../../components/RowTop40/RowTop40";

const Home = ({
  apiKEY, // DEL if process
  urlImage,
  searchTerm,
  setSearchTerm,
  searchResult,
  setSearchResult,
  movieDetails,
  setMovieDetails,
  genresFilms,
  moviesPEGI,
  setMoviesPEGI,
  // GENRES THEMES DE FILMS EN PROPS
  actionMovie,
  aventureMovie,
  animationMovie,
  comedieMovie,
  crimeMovie,
  documentaireMovie,
  drameMovie,
  familialMovie,
  fantastiqueMovie,
  histoireMovie,
  horreurMovie,
  musiqueMovie,
  mystereMovie,
  romanceMovie,
  sciencefictionMovie,
  telefilmMovie,
  thrillerMovie,
  guerreMovie,
  westernMovie,
  // PROPS DATA TYPE CHANGER
  dataType,
  setDataType,
}) => {
  const [popularMovie, setPopularMovie] = useState([]);
  const [popularTop2040, setPopularTop2040] = useState([]);

  const initialNumber = 0;
  const [indexMovie, setIndexMovie] = useState(initialNumber);

  const [truncateValue, setTruncateValue] = useState(120);

  // POPULAR MOVIE FROM 0-20
  useEffect(() => {
    const popularCall1 = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKEY}&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setPopularMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    popularCall1();
  }, []);

  // POPULAR MOVIE FROM 20-40
  useEffect(() => {
    const popularCall2 = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKEY}&language=fr-FR&page=2`
        )
        .then((response) => response.data)
        .then(
          (data) =>
            popularMovie && setPopularTop2040(popularMovie.concat(data.results))
        )
        .catch((err) => {
          console.log(err);
        });
    };
    popularCall2();
  }, [popularMovie]);

  // MOVIE GENRE : POPULAR Top 10
  const selectionTop10 = popularMovie && popularTop2040.slice(0, 10);
  // MOVIE GENRE : POPULAR  Top 11-40
  const selectionTop40 = popularMovie && popularTop2040.slice(10, 40);

  return (
    <div>
      <Navbar
        apiKEY={apiKEY} // DEL if process
        urlImage={urlImage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        movieDetails={movieDetails}
        dataType={dataType}
        setDataType={setDataType}
      />

      {/* FILMS POPULAIRES TOP10 */}
      {selectionTop10.length && (
        <div className="top10Component">
          <Top10
            moviesList={selectionTop10.length - 1}
            popularMovie={selectionTop10[indexMovie]}
            urlImage={urlImage}
            indexMovie={indexMovie}
            setIndexMovie={setIndexMovie}
            truncateValue={truncateValue}
            setTruncateValue={setTruncateValue}
            genresFilms={genresFilms}
            moviesPEGI={moviesPEGI}
            setMoviesPEGI={setMoviesPEGI}
          />{" "}
        </div>
      )}
      {/* AFFICHAGE ELEMENTS RECHERCHES SI SAISIE */}
      {searchTerm.length ? (
        <Row
          classic="researchClass"
          title="Recherche en direct"
          moviesList={searchResult}
          urlImage={urlImage}
        />
      ) : (
        ""
      )}
      {/* FILMS POPULAIRE 11-40 */}
      {selectionTop40 && (
        <RowTop40
          title="FILMS POPULAIRES TOP 11 - 40"
          moviesList={selectionTop40}
          genresFilms={genresFilms}
          urlImage={urlImage}
        />
      )}

      {/* FILM ACTION */}
      {actionMovie && (
        <Row title="Action" moviesList={actionMovie} urlImage={urlImage} />
      )}

      {/* FILMS AVENTURE */}
      {aventureMovie && (
        <Row title="AVENTURE" moviesList={aventureMovie} urlImage={urlImage} />
      )}

      {/* FILMS ANIMATION */}
      {animationMovie && (
        <Row
          title="animation"
          moviesList={animationMovie}
          urlImage={urlImage}
        />
      )}

      {/* FILMS COMEDIE */}
      {comedieMovie && (
        <Row title="comedie" moviesList={comedieMovie} urlImage={urlImage} />
      )}

      {/* FILMS CRIME */}
      {crimeMovie && (
        <Row title="crime" moviesList={crimeMovie} urlImage={urlImage} />
      )}

      {/* FILMS DOCUMENTAIRE */}
      {documentaireMovie && (
        <Row
          title="documentaire"
          moviesList={documentaireMovie}
          urlImage={urlImage}
        />
      )}

      {/* FILMS DRAME */}
      {drameMovie && (
        <Row title="drame" moviesList={drameMovie} urlImage={urlImage} />
      )}

      {/* FILMS FAMILLE */}
      {familialMovie && (
        <Row title="familial" moviesList={familialMovie} urlImage={urlImage} />
      )}

      {/* FILMS FANTASTIQUE */}
      {fantastiqueMovie && (
        <Row
          title="fantastique"
          moviesList={fantastiqueMovie}
          urlImage={urlImage}
        />
      )}

      {/* FILMS Histoire */}
      {histoireMovie && (
        <Row title="histoire" moviesList={histoireMovie} urlImage={urlImage} />
      )}

      {/* FILMS HORREUR */}
      {horreurMovie && (
        <Row title="horreur" moviesList={horreurMovie} urlImage={urlImage} />
      )}

      {/* FILMS MUSIQUE */}
      {musiqueMovie && (
        <Row title="musique" moviesList={musiqueMovie} urlImage={urlImage} />
      )}

      {/* FILMS MYSTERE */}
      {mystereMovie && (
        <Row title="mystere" moviesList={mystereMovie} urlImage={urlImage} />
      )}

      {/* FILMS ROMANCE */}
      {romanceMovie && (
        <Row title="ROMANCE" moviesList={romanceMovie} urlImage={urlImage} />
      )}

      {/* FILMS SCIENCE FICTION */}
      {sciencefictionMovie && (
        <Row
          title="sciencefiction"
          moviesList={sciencefictionMovie}
          urlImage={urlImage}
        />
      )}

      {/* FILMS TELEFILM */}
      {telefilmMovie && (
        <Row title="telefilm" moviesList={telefilmMovie} urlImage={urlImage} />
      )}

      {/* FILMS THRILLER*/}
      {thrillerMovie && (
        <Row title="thriller" moviesList={thrillerMovie} urlImage={urlImage} />
      )}

      {/* FILMS GUERRE*/}
      {guerreMovie && (
        <Row title="guerre" moviesList={guerreMovie} urlImage={urlImage} />
      )}

      {/* FILMS WESTERN*/}
      {westernMovie && (
        <Row title="western" moviesList={westernMovie} urlImage={urlImage} />
      )}
    </div>
  );
};

export default Home;
