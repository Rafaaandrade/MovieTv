import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
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
}));

export default useStyles;
