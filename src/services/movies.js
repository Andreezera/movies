import { BaseURL, ApiKey } from './config'

const getGenre = () =>
    fetch(`${BaseURL}/genre/movie/list?api_key=${ApiKey}&language=pt-BR`, {
        method: "GET", headers: { "Content-Type": "application/json" }
    })
        .then(_ => _.json())
        .catch(_ => null)

const getMovies = () =>
    fetch(`${BaseURL}/discover/movie?api_key=${ApiKey}&language=pt-BR`, {
        method: "GET", headers: { "Content-Type": "application/json" }
    })
        .then(_ => _.json())
        .catch(_ => null)

const getMovieById = id =>
    fetch(`${BaseURL}/movie/${id}?api_key=${ApiKey}&language=pt-BR`, {
        method: "GET", headers: { "Content-Type": "application/json" }
    })
        .then(_ => _.json())
        .catch(_ => null)

const getMovieVideosById = id =>
    fetch(`${BaseURL}/movie/${id}/videos?api_key=${ApiKey}&language=pt-BR`, {
        method: "GET", headers: { "Content-Type": "application/json" }
    })
        .then(_ => _.json())
        .catch(_ => null)

export default
    { getGenre
    , getMovies
    , getMovieById
    , getMovieVideosById
    }