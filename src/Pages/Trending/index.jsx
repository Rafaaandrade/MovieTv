import { useEffect } from "react";
import Card from "../../components/Card";
import { useAPIContext } from "../../components/Context/APIContext";
import CustomPagination from "../../components/CustomPagination";
import useStyles from "../styles";

const Trending = () => {
  const { content, pagination, fetchTrending, setPagination } =
    useAPIContext();
  const styles = useStyles();

  useEffect(() => {
    fetchTrending();
  }, [pagination]);

  return (
    <div>
      <span className={styles.pageTitle}>Em alta</span>
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
              type={c.media_type}
            />
          ))}
      </div>
      <CustomPagination numPages={10} setPagination={setPagination} />
    </div>
  );
};

export default Trending;
