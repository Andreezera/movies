import Home from "./pages/home"
import Movie from "./pages/movie"

export default [
    { path: '/', exact: true, allow: { all: true }, component: Home.view },
    { path: '/:id', exact: true, allow: { all: true }, component:   Movie.view }
]
