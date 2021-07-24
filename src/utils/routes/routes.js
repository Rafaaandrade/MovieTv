import Trending from "../../Pages/Trending";
import Movies from "../../Pages/Movies"
import Series from "../../Pages/Series"
import Search from "../../Pages/Search"
import Favoritos from "../../Pages/Favoritos"

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