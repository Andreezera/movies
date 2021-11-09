import React, { useEffect } from 'react'
import "./styles.scss"
import Layout from '../../components/layout'
import SeachInput from '../../components/searchInput'
import MoviesList from '../../components/moviesList'

export default ({ m, msg, props }) => {

    useEffect(() => {
        msg.load()
    }, [])

    return (<Layout currentRoute={props.location.pathname}>
        <div className="view-content">
            <SeachInput 
                id="search"
                value={m.seachText} 
                placeholder="Busque um filme por nome, ano ou gênero..."
                onChange={e => msg.set({ search: e.target.value })}
            />
            <MoviesList
                id="movies-list"
                moviesList={m.moviesList}
                openMovieDetails={movieId => props.history.push(`/${movieId}`)}
            />
        </div>
    </Layout>)
}