import SearchInput from "../../components/SearchInput";
import useStyles from "../styles";

const Search = () => {
  const styles = useStyles();
  return (
    <div>
      <span className={styles.pageTitle}>Search</span>
      <SearchInput/>
    </div>
  );
};

export default Search;
