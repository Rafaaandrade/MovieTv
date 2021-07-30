import { createTheme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    margin: "15px 0",
  },
  field: {
    flex: 1,
  },
  button: {
    marginLeft: 10,
    color: 'black',
    background: '#fff'
  },
  tab: {
    width: 50,
  },
}));

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fff",
    },
  },
});

export default useStyles;
