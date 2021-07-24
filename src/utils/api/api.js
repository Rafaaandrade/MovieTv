const baseUrl = 'https://api.themoviedb.org/3'

export const API = {
    emAlta: baseUrl + '/trending/all/day?api_key='
    + process.env.REACT_APP_KEY + '&page='
}
