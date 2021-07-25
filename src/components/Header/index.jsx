import useStyles from "./styles";

const Header = () => {

    const styles = useStyles();

    const toTop = () => window.scroll(0,0);
    return (
        <span onClick={toTop} className={styles.header}>Movie TV</span>
    )
}
export default Header;