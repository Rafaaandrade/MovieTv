import { ThemeProvider } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import useStyles, { darkTheme } from "./styles";

const CustomPagination = ({ numPages, setPagination }) => {
  const styles = useStyles();

  const handleChange = (page) => {
    setPagination(page);
    window.scroll(0, 0);
  };

  return (
    <>
      {numPages > 1}
      <div className={styles.pagination}>
        <ThemeProvider theme={darkTheme}>
          <Pagination
            onChange={(ev) => handleChange(ev.target.textContent)}
            count={numPages}
            hideNextButton
            hidePrevButton
            color="primary"
          />
        </ThemeProvider>
      </div>
    </>
  );
};

export default CustomPagination;
