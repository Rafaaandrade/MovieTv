import Favoritos from "../../components/Pages/Favoritos";
import Movies from "../../components/Pages/Movies";
import Search from "../../components/Pages/Search";
import Series from "../../components/Pages/Series";
import Trending from "../../components/Pages/Trending";


const routes = [
    {
        path: '/',
        exact: true,
        component: Trending
    },
    {
        path:'/movies',
        exact: true,
        component: Movies
    },
    {
        path:'/series',
        exact: true,
        component: Series
    },
    {
        path:'/search',
        exact: true,
        component: Search
    },
    {
        path:'/favorites',
        exact: true,
        component: Favoritos
    },

];

export default routes;