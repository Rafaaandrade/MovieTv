import { Chip } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useAPIContext } from "../Context/APIContext";
import useStyles from "./styles";

const ChipGenres = () => {
  const {
    fetchGenres,
    genresList,
    setGenresList,
    selectedGenres,
    setSelectedGenres,
    setPagination,
  } = useAPIContext();
  const styles = useStyles();

  const [color, setColor] = useState()
  useEffect(() => {
    fetchGenres();

    return () => {
      setGenresList({});
    };
  }, []);

  const handleAddGenresFilter = (genero) => {
    setSelectedGenres([...selectedGenres, genero]);
    setGenresList(genresList.filter((g) => g.id !== genero.id));
    setPagination(1);
  };

  const handleRemoveGenresFilter = (genero) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genero.id)
    );
    setGenresList([...genresList, genero]);
    setPagination(1);
  };

  return (
    <div className={styles.chipContainer}>
      {selectedGenres &&
        selectedGenres.map((genero) => (
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
      {genresList &&
        genresList.map((genero) => (
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
