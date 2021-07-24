import { Badge } from "@material-ui/core";
import {
  img_300,
  indisponivel,
} from "../../utils/constants/imagens/imagens-name";
import "./styles.css";

const Card = ({ id, image, title, date, type, vote_average }) => {
  return (
    <div className="container">
      <Badge
        badgeContent={vote_average || 'Sem votos'}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="image"
        src={image ? `${img_300}/${image}` : indisponivel}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subtitle">
        {type === "tv" ? "Séries de TV" : "Filmes"}
        <span>{date}</span>
      </span>
    </div>
  );
};

export default Card;
