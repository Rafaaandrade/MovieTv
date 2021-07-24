import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  navigation: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d3633",
    zIndex: 100,
  },
  action: {
    color: "white",
    "&:focus": {
      color: "aquamarine;",
    },
  },
}));

export default useStyles;
