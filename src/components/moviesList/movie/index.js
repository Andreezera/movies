import React from "react"
import './styles.scss'
import moment from 'moment'
import Genre from '../../genre'
import VoteAverage from '../../voteAverage'

export default ({ id, title, voteAverage, releaseDate, overview, posterPath, genreList = [], style, onClick}) => {

    const getImageUrl = poster_path => {
        return `https://image.tmdb.org/t/p/w300/${poster_path}`
    }

    return (
        <div id={id} className="movie-container" style={style} onClick={onClick}>
            <img className="movie-poster" src={getImageUrl(posterPath)} alt="poster"/>
            <div className="movie-content">
                <div className="title-header">
                    <div className="average">
                        <VoteAverage average={voteAverage} style={{width: "70px", height: "70px"}}/>
                    </div>
                    <p>{title}</p>
                </div>
                <p className="movie-release-date">
                    {moment(releaseDate).format('DD/MM/YYYY')}
                </p>
                <div className="movie-overview">
                    {overview}
                </div>
                <div className="movie-genre">{
                    genreList.map((genre, index) => {
                        return <Genre title={genre} key={index}/>
                    })
                }</div>
            </div>
        </div>
    )
}