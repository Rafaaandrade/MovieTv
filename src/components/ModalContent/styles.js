import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "90%",
    height: "75%",
    backgroundColor: "#7c65e7",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100",
    overflowY: "scroll",
    scrollbarsWidth: "none",

    "&::-webkit-scrollbar": {
      display: "none",
    },
    "@media(min-width:835px)": {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: "10px 0",
    },
  },
  modalimage_landscape: {
    objectFit: "contain",
    borderRadius: "10px",
    "@media(min-width:835px)": {
      display: "none",
    },
  },
  modalimage_portrait: {
    display: "none",
    objectFit: "contain",
    borderRadius: "10px",
    "@media(min-width:835px)": {
      display: "flex",
      width: "38%",
    },
  },
  tagline: {
    paddingBottom: "10px",
    alignSelf: "center",
  },
  sobre: {
    padding: "10px",
    width: "95%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    fontWeight: "300",

    "@media(min-width:835px)": {
      width: "58%",
      height: "100%",
      padding: "0",
    },
  },
  title: {
    // height: "12%",
    fontSize: "5vw",
    display: "flex",
    alignItems: " center",
    justifyContent: "center",

    "@media(min-width:835px)": {
      fontSize: "3.5vw",
    },
  },
  description: {
    display: "flex",
    height: "40%",
    overflowY: "scroll",
    padding: "15px",
    borderRadius: "20px",
    scrollbarsWidth: "thin",
    boxShadow: "inset 0 0 5px #000000",
    textAlign: "justify",

    "&::-webkit-scrollbar": {
      display: "none",
    },
    "@media(min-width:835px)": {
      fontSize: "22px",
    },
  },
}));

export default useStyles;
