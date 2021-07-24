import axios from "axios";
import { createContext, useContext, useState } from "react";
import { API } from "../../../utils/api/api";

const APIContext = createContext();

export default function APIContextProvider({ children }) {
  const [content, setContent] = useState([]);
  const [pagination, setPagination] = useState(1);

  const fetchTrending = async () => {
    const { data } = await axios.get(API.emAlta + pagination);
    setContent(data.results);
  };

  return (
    <APIContext.Provider
      value={{
        content,
        pagination,
        setPagination,
        fetchTrending,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPIContext() {
  const { content, fetchTrending } = useContext(APIContext);

  return {
    content,
    fetchTrending,
  };
}
