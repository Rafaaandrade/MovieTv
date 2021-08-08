import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  carrouselItem: {
    display: 'flex',
    flexDirection: 'column',
    objectFit: 'contain',
    padding: '10px'
  },
  carrouselImage: {
      borderRadius: '10px',
      marginBottom: '5px',
      boxShadow: '0px 0px 10px black'
  }
}));

export default useStyles;
