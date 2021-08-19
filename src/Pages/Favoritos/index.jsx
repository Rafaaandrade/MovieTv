import Card from "../../components/Card";
import { useAPIContext } from "../../components/Context/APIContext";
import useStyles from "../styles";

const Favoritos = () => {
  const { content } = useAPIContext();
  const { favorite } = content;
  const styles = useStyles();

  return (
    <div>
      <span className={styles.pageTitle}>Favoritos</span>
      <div className={styles.containerContent}>
        {favorite &&
          favorite.map((c) =>
            c.release_date ? (
              <Card
                key={c.id}
                id={c.id}
                image={c.poster_path}
                title={c.name}
                date={c.release_date}
                vote_average={c.vote_average}
                type="movie"
              />
            ) : (
              <Card
                key={c.id}
                id={c.id}
                image={c.poster_path}
                title={c.name}
                date={c.release_date}
                vote_average={c.vote_average}
                type="tv"
              />
            )
          )}
      </div>
    </div>
  );
};

export default Favoritos;
