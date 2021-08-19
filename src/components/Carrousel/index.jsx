import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  img_300,
  indisponivel,
} from "../../utils/constants/imagens/imagens-name";
import useStyles from "./styles";

const responsive = {
  0: {
    items: 3,
  },
  512: {
    items: 5,
  },
  1024: {
    items: 7,
  },
};

const Carrousel = ({ cast }) => {
  const styles = useStyles();
  const handleDragStart = (e) => e.preventDefault();
  const itens = cast?.map((c) => (
    <div className={styles.carrouselItem}>
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : indisponivel}
        alt={c?.name}
        onDragStart={handleDragStart}
        className={styles.carrouselImage}
      />
      <b className="carrouselitem-txt">{c?.name}</b>
    </div>
  ));
  return (
    <AliceCarousel
      autoPlay
      responsive={responsive}
      infinite
      disableButtonsControls
      disableDotsControls
      mouseTracking
      items={itens}
    />
  );
};
export default Carrousel;
