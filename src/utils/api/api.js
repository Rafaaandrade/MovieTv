const baseUrl = "https://api.themoviedb.org/3";
const type = "";
const page = "";

export const API = {
  generos:
    baseUrl +
    "/genre/" +
    type +
    "/list?api_key=" +
    process.env.REACT_APP_KEY +
    "&language=pt-BR",
  highlights:
    baseUrl +
    "/trending/all/day?api_key=" +
    process.env.REACT_APP_KEY +
    "&page=",
  filmes:
    baseUrl +
    "/discover/movie?api_key=" +
    process.env.REACT_APP_KEY +
    "&language=pt-BR&sort_by=popularity.desc&include_adult=false&page=" +
    page
};
