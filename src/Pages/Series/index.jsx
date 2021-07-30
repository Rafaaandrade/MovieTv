import { useEffect } from "react";
import Card from "../../components/Card";
import ChipGenres from "../../components/ChipGenres";
import { useAPIContext } from "../../components/Context/APIContext";
import CustomPagination from "../../components/CustomPagination";
import useStyles from "../styles";

const Series = () => {
  const { content, pagination, buildGenresParam, fetchTopSeries, setPagination, numPages } =
    useAPIContext();
  const styles = useStyles();

  useEffect(() => {
    fetchTopSeries();
  }, [pagination, buildGenresParam]);

  return (
    <div>
      <span className={styles.pageTitle}>Series</span>
      <ChipGenres type="tv" />
      <div className={styles.containerContent}>
        {content &&
          content.data.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              image={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              vote_average={c.vote_average}
              type="tv"
            />
          ))}
      </div>
      <CustomPagination numPages={numPages} setPagination={setPagination} />
    </div>
  );
};

export default Series;
