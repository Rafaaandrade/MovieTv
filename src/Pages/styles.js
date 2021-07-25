import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    containerContent: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    pageTitle: {
        display: 'flex',
        textTransform: 'uppercase',
        justifyContent: 'center',
        fontFamily: 'Segoe UI',
        fontSize: '4vw',
        padding: '4px',
        borderRadius: '50px',
        color: 'white',

        "@media(max-width: 1000px)": {
            fontSize: "6.4vw"
        }
    }
}));

export default useStyles;
