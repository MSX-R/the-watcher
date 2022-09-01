import "./Navbar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logoBlanc.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import SearchBar from "../searchBar/searchBar";
// import requests from "../Bonus/Requests";

const Navbar = ({
  searchTerm,
  setSearchTerm,
  searchResult,
  setSearchResult,
  movieDetails,
  setMovieDetails,
  // PROPS DATA TYPE CHANGER
  dataType,
  setDataType,
}) => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  // Bg nav color scroll change
  const [navbarBG, setNavbarBG] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarBG(true);
    } else {
      setNavbarBG(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const changeType = () => {
    setDataType("tv");
    console.log(" JE SUIS LE DATA TYPE", dataType);
  };

  return (
    <div className={navbarBG ? " navbar navbarBGdark" : "navbar"}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        movieDetails={movieDetails}
        setMovieDetails={setMovieDetails}
      />
      <img
        src={Logo}
        className={!navbarBG ? "navlogo hidden" : "navlogo"}
        alt="logo"
        onClick={() => navigate("/")}
      />
      {!showMenu ? (
        <GiHamburgerMenu
          className="burgermenu "
          onClick={() => handleClick()}
        />
      ) : (
        <CgClose className="burgermenu " onClick={() => handleClick()} />
      )}
      <div className={showMenu ? "menuMobileOuvert" : "menuMobileFerme"}>
        <div className="navContainer">
          <img
            src={Logo}
            className="navlogo"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <li className="navlinks" onClick={() => navigate("/home")}>
            Accueil
          </li>
          <li className="navlinks" onClick={() => setDataType("movie")}>
            Films
          </li>
          <li className="navlinks" onClick={() => changeType()}>
            Series
          </li>
          <li className="navlinks">Favoris</li>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
