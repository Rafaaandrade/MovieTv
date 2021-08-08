import { Badge } from "@material-ui/core";
import {
  img_300,
  indisponivel,
} from "../../utils/constants/imagens/imagens-name";
import ModalUI from "../ModalUI";
import useStyles from "./styles";

const Card = ({ image, title, date, type, vote_average, id}) => {
  const styles = useStyles();
  return (
    <ModalUI type={type} id={id}>
      <Badge
        badgeContent={vote_average || "Sem votos"}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className={styles.image}
        src={image ? `${img_300}/${image}` : indisponivel}
        alt={title}
      />
      <b className={styles.title}>{title}</b>
      <span className={styles.subtitle}>
        {type === "tv" ? "Séries de TV" : "Filmes"}
        <span>{date}</span>
      </span>
    </ModalUI>
  );
};

export default Card;
