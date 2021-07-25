import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "200px",
    padding: "5px",
    margin: "5px 0",
    backgroundColor: "#281c34",
    borderRadius: "13px",
    position: "relative",
    fontFamily: "sans-serif",

    "&:hover": {
      color: "rgb(17, 185, 228)",
      backgroundColor: "#700fdf",
      cursor: "pointer",
    },

    "@media(max-width: 550px)": {
      width: "46%",
    },
  },
  image: {
    borderRadius: "13px",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: "15px",
    padding: "8px 0",
  },
  subtitle: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 2px 0 3px",
  },
}));

export default useStyles;
