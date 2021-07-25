import { useEffect } from "react";
import Card from "../../components/Card";
import ChipGenres from "../../components/ChipGenres";
import { useAPIContext } from "../../components/Context/APIContext";
import CustomPagination from "../../components/CustomPagination";
import useStyles from "../styles";


const Movies = () => {
  const { content, pagination, setPagination, fetchTopMovies, numPages } =
    useAPIContext();
  const styles = useStyles();

  useEffect(() => {
    fetchTopMovies();
  }, [pagination]);

  return (
    <div>
      <span className={styles.pageTitle}>Filmes</span>
      <ChipGenres type="movie" />
      <div className={styles.containerContent}>
        {content &&
          content.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              image={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              vote_average={c.vote_average}
              type="movie"
            />
          ))}
      </div>
      <CustomPagination numPages={numPages} setPagination={setPagination} />
    </div>
  );
};

export default Movies;
