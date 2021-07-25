import { createTheme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    pagination: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10'
    }
}));

export const darkTheme = createTheme({
    palette: {
        type: 'dark'
    }
})

export default useStyles;
