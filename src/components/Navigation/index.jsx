import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Favorite, Search, Tv, Whatshot } from "@material-ui/icons";
import MovieIcon from "@material-ui/icons/Movie";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NAVIGATION_LABELS as NAV } from "../../utils/constants/label/navigation";
import { useAPIContext } from "../Context/APIContext";
import useStyles from "./styles";

const Navigation = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();
  const styles = useStyles();
  const { content } = useAPIContext();
  const { favorite } = content;

  //Verifica qual opção foi escolhida e direciona para a página
  useEffect(() => {
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/movies");
    else if (value === 2) history.push("/series");
    else if (value === 3) history.push("/search");
    else if (value === 4) history.push("/favorites");
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={styles.navigation}
    >
      <BottomNavigationAction
        className={styles.action}
        label={NAV.emAlta}
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        className={styles.action}
        label={NAV.filmes}
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        className={styles.action}
        label={NAV.tv}
        icon={<Tv />}
      />
      <BottomNavigationAction
        className={styles.action}
        label={NAV.search}
        icon={<Search />}
      />
      {favorite && favorite.length !== 0 && (
        <BottomNavigationAction
          className={styles.action}
          label={NAV.favorito}
          icon={<Favorite />}
        />
      )}
    </BottomNavigation>
  );
};

export default Navigation;
