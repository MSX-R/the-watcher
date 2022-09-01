import { useState, useEffect } from "react";
// import requests from "../Bonus/Requests";
// import axios from "../Bonus/axios";
import "./searchBar.css";
import { MdSavedSearch } from "react-icons/md";
import { CgCloseR } from "react-icons/cg";
import axios from "axios";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  searchResult,
  setSearchResult,
  movieDetails,
  setMovieDetails,
}) => {
  const [movieId, setMovieId] = useState("");
  const [viewSearchBar, setViewSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setViewSearchBar(!viewSearchBar);
    setSearchTerm("");
  };

  const fetchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=1&include_adult=true&query=${searchTerm}`;

  useEffect(() => {
    if (searchTerm.length > 0) {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setSearchResult(request.data.results);
        return request;
      }
      fetchData();
    }
  }, [fetchUrl, searchTerm]);

  const handleClick = (movie) => {
    setMovieId(movie.id);
  };

  useEffect(() => {
    if (movieId.length > 0) {
      const fetchUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,images,credits,release_dates&language=fr-FR`;
      
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovieDetails(request.data);
        return request;
      }
      fetchData();
    }
  }, [movieId]);

  return (
    <>
      {viewSearchBar ? (
        <div className="searchBarContainer">
          <input
            type="text"
            className="searchBar slide-in-bck-center "
            placeholder="Star Wars"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <CgCloseR
            className={
              !viewSearchBar ? "cgCloser cgCloserExit" : "cgCloser cgCloserOpen"
            }
            onClick={() => toggleSearchBar()}
          />
        </div>
      ) : (
        <>
          <MdSavedSearch
            alt="loupe"
            className="loupeIcon2 loupeContainer"
            onClick={() => toggleSearchBar()}
          />
        </>
      )}
    </>
  );
};

export default SearchBar;
