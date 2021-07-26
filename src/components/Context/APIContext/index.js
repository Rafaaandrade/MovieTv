import axios from "axios";
import { createContext, useContext, useState } from "react";
import useGenresQuery from "../../../hooks/useGenresQuery";
import { API } from "../../../utils/api/api";

const APIContext = createContext();

const initialState = {
  data: [],
  pesquisa: {},
  genresList: [],
  selectedGenres: [],
};

export default function APIContextProvider({ children }) {
  const [content, setContent] = useState(initialState);
  const [pagination, setPagination] = useState(1);
  const [numPages, setNumPages] = useState();
  const { selectedGenres, genresList } = content;
  const buildGenresParam = useGenresQuery(selectedGenres);
  console.log("buildGenresParam", buildGenresParam);

  const fetchTrending = async () => {
    const { data } = await axios.get(API.highlights + pagination);

    setContent((prevState) => ({
      ...prevState,
      data: data.results,
    }));
  };

  const fetchTopMovies = async () => {
    const { data } = await axios.get(
      API.filmes + pagination + "&with_genres=" + buildGenresParam
    );
    setContent((prevState) => ({
      ...prevState,
      data: data.results,
    }));
    setNumPages(data.total_pages);
  };

  const fetchGenres = async (type) => {
    if (genresList.length === 0) {
      const { data } = await axios.get(API.generos + type);
      setContent((prevState) => ({
        ...prevState,
        genresList: data.genres,
      }));
    }
  };

  return (
    <APIContext.Provider
      value={{
        content,
        setContent,
        pagination,
        setPagination,
        fetchTrending,
        fetchTopMovies,
        fetchGenres,
        numPages,
        buildGenresParam,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPIContext() {
  const {
    content,
    setContent,
    pagination,
    setPagination,
    numPages,
    fetchTrending,
    fetchTopMovies,
    fetchGenres,
    buildGenresParam,
  } = useContext(APIContext);

  return {
    content,
    pagination,
    setPagination,
    setContent,
    numPages,
    fetchTrending,
    fetchTopMovies,
    fetchGenres,
    buildGenresParam,
  };
}
