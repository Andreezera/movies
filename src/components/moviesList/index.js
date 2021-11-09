import React from "react"
import './styles.scss'
import Movie from './movie'

export default ({ id, moviesList=[], style, openMovieDetails = () => {}}) => {
    return (
        <div id={id} className="movies-list-container" style={style}>
            
            {moviesList.map((movie, index) => {
                return <Movie 
                            onClick={() => openMovieDetails(movie.id)}
                            key={index}
                            id={movie.id}
                            title={movie.title}
                            voteAverage={movie.vote_average}
                            releaseDate={movie.release_date}
                            overview={movie.overview}
                            posterPath={movie.poster_path}
                            genreList={movie.genre_list}
                        />
                })                
            }
        </div>
    )
}