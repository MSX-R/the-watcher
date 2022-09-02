import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import EntrancePage from "./screens/EntrancePage/EntrancePage";
import Home from "./screens/Home/Home";
import "./App.css";
import "./animationsCSS/animations.css";

function App() {
  const apiKEY = "c89646cb9c2f9f7a6144c074fff0e9c7" // DEL if process
  const urlImage = "https://image.tmdb.org/t/p/original";
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  // MOVIE PEGI
  const [moviesPEGI, setMoviesPEGI] = useState([]);
  // GENRES LISTE GENERALE
  const [genresFilms, setGenresFilms] = useState([]);
  // GENRES THEMES
  const [actionMovie, setActionMovie] = useState([]);
  const [aventureMovie, setAventureMovie] = useState([]);
  const [animationMovie, setAnimationMovie] = useState([]);
  const [comedieMovie, setComedieMovie] = useState([]);
  const [crimeMovie, setCrimemovie] = useState([]);
  const [documentaireMovie, setDocumentairemovie] = useState([]);
  const [drameMovie, setDrameMovie] = useState([]);
  const [familialMovie, setFamilialMovie] = useState([]);
  const [fantastiqueMovie, setFantastiqueMovie] = useState([]);
  const [histoireMovie, setHistoireMovie] = useState([]);
  const [horreurMovie, setHorreurMovie] = useState([]);
  const [musiqueMovie, setMusiqueMovie] = useState([]);
  const [mystereMovie, setMystereMovie] = useState([]);
  const [romanceMovie, setRomanceMovie] = useState([]);
  const [sciencefictionMovie, setSciencefictionMovie] = useState([]);
  const [telefilmMovie, setTelefilmMovie] = useState([]);
  const [thrillerMovie, setThrillerMovie] = useState([]);
  const [guerreMovie, setGuerreMovie] = useState([]);
  const [westernMovie, setWesternMovie] = useState([]);
// DATA TYPE CHANGER
const [dataType, setDataType] =useState(["movie"])


  // PEGI LISTE FRANCAISE
  useEffect(() => {
    const moviesPEGIcall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/certification/movie/list?api_key=${apiKEY}`
          // `https://api.themoviedb.org/3/certification/movie/list?api_key=${process.env.REACT_APP_API_KEY}` avec process.env
        )
        .then((response) => response.data)
        .then((data) => setMoviesPEGI(data.certifications.FR)
        )
        .catch((err) => {
          console.log(err);
        });
    };
    moviesPEGIcall();
  }, []);

  // MOVIES = GENRES LISTE GENERALE
  useEffect(() => {
    const genresFilmsCALL = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKEY}&language=fr-FR`
        )
        .then((response) => response.data)
        .then((data) => setGenresFilms(data.genres))
        .catch((err) => {
          console.log(err);
        });
    };
    genresFilmsCALL();
  }, []);


  // MOVIE GENRE : ACTION
  useEffect(() => {
    const actionCALL = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=28&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setActionMovie(data.results))

        .catch((err) => {
          console.log(err);
        });
    };
    actionCALL();
  }, []);

  // MOVIE GENRE : AVENTURE
  useEffect(() => {
    const aventureCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=12&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setAventureMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    aventureCall();
  }, []);

  // MOVIE GENRE : ANIMATION
  useEffect(() => {
    const animationCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=16&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setAnimationMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    animationCall();
  }, []);

  // MOVIE GENRE : COMEDIE
  useEffect(() => {
    const comedieCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=35&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setComedieMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    comedieCall();
  }, []);

  // MOVIE GENRE : CRIME
  useEffect(() => {
    const crimeCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=80&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setCrimemovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    crimeCall();
  }, []);

  // MOVIE GENRE : DOCUMENTAIRE
  useEffect(() => {
    const documentaireCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=99&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setDocumentairemovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    documentaireCall();
  }, []);

  // MOVIE GENRE : DRAME
  useEffect(() => {
    const drameCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=18&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setDrameMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    drameCall();
  }, []);

  // MOVIE GENRE : FAMILLE
  useEffect(() => {
    const familialCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=10751&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setFamilialMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    familialCall();
  }, []);

  // MOVIE GENRE : FANTASTIQUE
  useEffect(() => {
    const fantastiqueCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=14&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setFantastiqueMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    fantastiqueCall();
  }, []);

  // MOVIE GENRE : HISTOIRE
  useEffect(() => {
    const histoireCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=36&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setHistoireMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    histoireCall();
  }, []);

  // MOVIE GENRE : HORREUR
  useEffect(() => {
    const horreurCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=27&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setHorreurMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    horreurCall();
  }, []);

  // MOVIE GENRE : MUSIQUE
  useEffect(() => {
    const musiqueCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=10402&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setMusiqueMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    musiqueCall();
  }, []);

  // MOVIE GENRE : MYSTERE
  useEffect(() => {
    const mystereCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=9648&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setMystereMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    mystereCall();
  }, []);

  // MOVIE GENRE : ROMANCE
  useEffect(() => {
    const romanceCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=10749&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setRomanceMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    romanceCall();
  }, []);

  // MOVIE GENRE : SCIENCEFICTION
  useEffect(() => {
    const sciencefictionCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=878&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setSciencefictionMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    sciencefictionCall();
  }, []);

  // MOVIE GENRE : TELEFILM
  useEffect(() => {
    const telefilmCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=10770&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setTelefilmMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    telefilmCall();
  }, []);

  // MOVIE GENRE : THRILLER
  useEffect(() => {
    const thrillerCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=53&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setThrillerMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    thrillerCall();
  }, []);

  // MOVIE GENRE : GUERRE
  useEffect(() => {
    const guerreCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=10752&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setGuerreMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    guerreCall();
  }, []);

  // MOVIE GENRE : WESTERN
  useEffect(() => {
    const westernCall = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&with_genres=37&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => setWesternMovie(data.results))
        .catch((err) => {
          console.log(err);
        });
    };
    westernCall();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<EntrancePage />} />
        <Route
          path="/home"
          element={
            <Home
            apiKEY={apiKEY} // DEL if process
              urlImage={urlImage}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              searchResult={searchResult}
              setSearchResult={setSearchResult}
              movieDetails={movieDetails}
              genresFilms={genresFilms}
              moviesPEGI={moviesPEGI}
              setMoviesPEGI={setMoviesPEGI}
              // PROPS DATA TYPE CHANGER
              dataType={dataType} 
              setDataType={setDataType}
              // MOVIES GENRES PROPS
              actionMovie={actionMovie}
              // setActionMovie={setActionMovie}
              aventureMovie={aventureMovie}
              // setAventureMovie={setAventureMovie}
              animationMovie={animationMovie}
              // setAnimationMovie={setAnimationMovie}
              comedieMovie={comedieMovie}
              // setComedieMovie={setComedieMovie}
              crimeMovie={crimeMovie}
              // setCrimemovie={setCrimemovie}
              documentaireMovie={documentaireMovie}
              // setDocumentairemovie={setDocumentairemovie}
              drameMovie={drameMovie}
              // setDrameMovie={setDrameMovie}
              familialMovie={familialMovie}
              // setFamilialMovie={setFamilialMovie}
              fantastiqueMovie={fantastiqueMovie}
              // setFantastiqueMovie={setFantastiqueMovie}
              histoireMovie={histoireMovie}
              // setHistoireMovie={setHistoireMovie}
              horreurMovie={horreurMovie}
              // setHorreurMovie={setHorreurMovie}
              musiqueMovie={musiqueMovie}
              // setMusiqueMovie={setMusiqueMovie}
              mystereMovie={mystereMovie}
              // setMystereMovie={setMystereMovie}
              romanceMovie={romanceMovie}
              // setRomanceMovie={setRomanceMovie}
              sciencefictionMovie={sciencefictionMovie}
              // setSciencefictionMovie={setSciencefictionMovie}
              telefilmMovie={telefilmMovie}
              // setTelefilmMovie={setTelefilmMovie}
              thrillerMovie={thrillerMovie}
              // setThrillerMovie={setThrillerMovie}
              guerreMovie={guerreMovie}
              // setGuerreMovie={setGuerreMovie}
              westernMovie={westernMovie}
              // setWesternMovie={setWesternMovie}
            />
          }
        />
        ;
      </Routes>
    </>
  );
}

export default App;
