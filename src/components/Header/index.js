import "./styles.css";

const Header = () => {

    const toTop = () => window.scroll(0,0);
    return (
        <span onClick={toTop} className='header'>Movie TV</span>
    )
}
export default Header;