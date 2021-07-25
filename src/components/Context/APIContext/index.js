import axios from "axios";
import { createContext, useContext, useState } from "react";
import { API } from "../../../utils/api/api";

const APIContext = createContext();

export default function APIContextProvider({ children }) {
  const [content, setContent] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [numPages, setNumPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genresList, setGenresList] = useState();

  const fetchTrending = async () => {
    const { data } = await axios.get(API.highlights + pagination);
    setContent(data.results);
  };

  const fetchTopMovies = async () => {
    const { data } = await axios.get(API.filmes + pagination);
    setContent(data.results);
    setNumPages(data.total_pages);
  };

  const fetchGenres = async (type) => {
    const {data} = await axios.get(API.generos + type);
    setGenresList(data.genres);
  }

  return (
    <APIContext.Provider
      value={{
        content,
        pagination,
        setPagination,
        selectedGenres,
        setSelectedGenres,
        genresList,
        setGenresList,
        fetchTrending,
        fetchTopMovies,
        fetchGenres,
        numPages,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPIContext() {
  const {
    content,
    pagination,
    setPagination,
    genresList,
    setGenresList,
    selectedGenres,
    setSelectedGenres,
    numPages,
    fetchTrending,
    fetchTopMovies,
    fetchGenres,
  } = useContext(APIContext);

  return {
    content,
    pagination,
    setPagination,
    genresList,
    setGenresList,
    selectedGenres,
    setSelectedGenres,
    numPages,
    fetchTrending,
    fetchTopMovies,
    fetchGenres
  };
}
