const baseUrl = "https://api.themoviedb.org/3";
let type = "";
let page = "";

export const API = {
  base: "https://api.themoviedb.org/3/",
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
    page,
  pesquisaFilme:
    baseUrl +
    "/search/movie?api_key=" +
    process.env.REACT_APP_KEY +
    "&language=pt-BR",
  pesquisaSerie:
    baseUrl +
    "/search/tv?api_key=" +
    process.env.REACT_APP_KEY +
    "&language=pt-BR",
  seriesHighlights:
    baseUrl +
    "/discover/tv?api_key=" +
    process.env.REACT_APP_KEY +
    "&language=pt-BR&sort_by=popularity.desc&include_adult=false&page=" +
    page,
};
