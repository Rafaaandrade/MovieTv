import { Chip } from "@material-ui/core";
import { useCallback, useEffect } from "react";
import { useAPIContext } from "../Context/APIContext";
import useStyles from "./styles";

const ChipGenres = () => {
  const { fetchGenres, content, setContent, setPagination } = useAPIContext();
  const styles = useStyles();

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleAddGenresFilter = useCallback((genero) => {

    const { selectedGenres, genresList } = content;
    const filter = genresList.filter((g) => g.id !== genero.id);
    setContent((prevState) => ({
      ...prevState,
      genresList: filter,
      selectedGenres: [...selectedGenres, genero],
    }))
    setPagination(1);
  }, [content, setContent, setPagination]);

  const handleRemoveGenresFilter = useCallback((genero) => {

    const { genresList, selectedGenres } = content;
    const filter = selectedGenres.filter((selected) => selected.id !== genero.id);
    setContent((prevState) => ({
      ...prevState,
      selectedGenres: filter,
      genresList: [...genresList, genero]
    }))
    setPagination(1);
  }, [content, setContent, setPagination]);

  return (
    <div className={styles.chipContainer}>
      {content &&
        content.selectedGenres.map((genero) => (
          <Chip
            className={styles.chip}
            label={genero.name}
            key={genero.id}
            size="small"
            color="primary"
            clickable
            onDelete={() => handleRemoveGenresFilter(genero)}
          />
        ))}
      {content &&
       content.genresList.map((genero) => (
          <Chip
            className={styles.chip}
            label={genero.name}
            key={genero.id}
            size="small"
            clickable
            onClick={() => handleAddGenresFilter(genero)}
          />
        ))}
    </div>
  );
};

export default ChipGenres;
