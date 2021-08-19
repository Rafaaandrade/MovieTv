import useStyles from "./styles";

const Header = () => {
  const styles = useStyles();

  const toTop = () => window.scroll(0, 0);
  return (
    <span className={styles.header} onClick={toTop}>
      Movie TV
    </span>
  );
};
export default Header;
