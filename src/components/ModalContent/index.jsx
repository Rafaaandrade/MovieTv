import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import {
  img_500,
  indisponivel,
} from "../../utils/constants/imagens/imagens-name";
import Carrousel from "../Carrousel";
import { useAPIContext } from "../Context/APIContext";
import useStyles from "./styles";

const ModalContent = () => {
  const styles = useStyles();
  const { content } = useAPIContext();
  const { details, video, cast } = content;

  return (
    <>
      {details && (
        <div className={styles.paper}>
          <div className={styles.content}>
            <img
              src={
                details.poster_path
                  ? `${img_500}/${details.poster_path}`
                  : indisponivel
              }
              alt={details.name || details.title}
              className={styles.modalimage_portrait}
            />
            <img
              src={
                details.poster_path
                  ? `${img_500}/${details.poster_path}`
                  : indisponivel
              }
              alt={details.name || details.title}
              className={styles.modalimage_landscape}
            />
            <div className={styles.sobre}>
              <span className={styles.title}>
                {details.name || details.title}(
                {(
                  details.first_air_date ||
                  details.release_date ||
                  "--------"
                ).substring(0, 4)}
                )
              </span>
              {details && details.tagline && (
                <i className={styles.tagline}>{details.tagline}</i>
              )}
              <span className={styles.description}>{details.overview}</span>
                <div>
                  <Carrousel cast={cast} />
                </div>
              <Button
                stlye={{ display: "flex", justifyContent: "center" }}
                variant="contained"
                startIcon={<YouTubeIcon />}
                color="secondary"
                target="_blank"
                href={`https://www.youtube.com/watch?v=${video}`}
              >
                Assista ao trailer
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalContent;
