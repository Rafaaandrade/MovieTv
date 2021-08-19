import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  header: {
    width: "100%",
    cursor: "pointer",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    textTransform: "uppercase",
    backgroundColor: "#39445a",
    fontFamily: "sans-serif",
    fontSize: "5vw",
    paddingBottom: "15px",
    boxShadow: "0px 1px 5px black",
    color: "white",
    zIndex: "100",

    "@media(max-width: 1000px)": {
      paddingTop: "15px",
      fontSize: "6.4vw",
      fontFamily: "sans-serif",
    },
  },
  btn: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default useStyles;
