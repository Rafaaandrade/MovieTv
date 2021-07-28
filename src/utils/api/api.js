const baseUrl = "https://api.themoviedb.org/3";
let type = "";
let page = "";

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
  // pesquisa:
  //   baseUrl +
  //   "/search/" +
  //   type +
  //   "?api_key=" +
  //   process.env.REACT_APP_KEY +
  //   "&language=pt-BR&query=" +
  //   searchInput +
  //   "&page=" +
  //   page +
  //   "&include_adult=false",
};
