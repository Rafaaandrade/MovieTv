import Card from "../../components/Card";
import { useAPIContext } from "../../components/Context/APIContext";
import CustomPagination from "../../components/CustomPagination";
import SearchInput from "../../components/SearchInput";
import useStyles from "../styles";

const Search = () => {
  const styles = useStyles();
  const { content , numPages, setPagination} = useAPIContext();
  const { ref, pesquisa } = content;



  return (
    <div>
      <span className={styles.pageTitle}>Sua pesquisa</span>
      <SearchInput />
      <div className={styles.searchContainer}>
        {pesquisa &&
          pesquisa.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              image={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              vote_average={c.vote_average}
              type={ref}
            />
          ))}
      </div>
      {numPages > 1 && ref ? (
        <CustomPagination numPages={numPages} setPagination={setPagination} />
      ): ""}
    </div>
  );
};

export default Search;
