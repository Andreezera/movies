import React, { useEffect } from 'react'
import "./styles.scss"
import Layout from '../../components/layout'
import moment from 'moment'
import VoteAverage from '../../components/voteAverage'
import Genre from '../../components/genre'

export default ({ m, msg, props }) => {

    useEffect(() => {        
        msg.load({idMovie: props.match.params.id})
    }, [])

    const getMoneyValue = value => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);
    }

    const getHourAndMinValue = runtime => {
        const duration = moment.duration(runtime, 'minutes');
        
        const hh = (duration.years()*(365*24)) + (duration.months()*(30*24)) + (duration.days()*24) + (duration.hours());
        
        const mm = duration.minutes();
        
        return `${hh}h ${mm}min`;
    }

    const getImageUrl = poster_path => {
        return `https://image.tmdb.org/t/p/w342/${poster_path}`
    }

    const getUrlVideo = videoId => {
        return `https://www.youtube.com/embed/${videoId}`
    }

    return (<Layout currentRoute={props.location.pathname}>
        <div className="movie-details-container">
            <header className="movie-header-container">
                <p className="movie-title">{m.movie.title}</p>
                <p className="movie-release-date">{moment(m.movie.release_date).format('DD/MM/YYYY')}</p>
            </header>
            <div className="movie-details-content">
                <div className="movie-details">
                    <div className="movie-overview">
                        <p className="title">Sinopse</p>
                        <hr/>
                        <p className="content">{m.movie.overview}</p>
                    </div>
                    <div className="movie-informations">
                        <p className="title">Informações</p>
                        <hr/>
                        <div className="content">
                            <div className="info">
                                <p className="info-title">Situação</p>
                                <p className="info-detail">{m.movie.status}</p>
                            </div>
                            <div className="info">
                                <p className="info-title">Idioma</p>
                                <p className="info-detail">
                                    {m.movie.spoken_languages && m.movie.spoken_languages.length > 0 && m.movie.spoken_languages[0].name}
                                </p>
                            </div>
                            <div className="info">
                                <p className="info-title">Duração</p>
                                <p className="info-detail">{m.movie.runtime ? getHourAndMinValue(m.movie.runtime) : '-'}</p>
                            </div>
                            <div className="info">
                                <p className="info-title">Orçamento</p>
                                <p className="info-detail">{getMoneyValue(m.movie.budget)}</p>
                            </div>
                            <div className="info">
                                <p className="info-title">Receita</p>
                                <p className="info-detail">{getMoneyValue(m.movie.revenue)}</p>
                            </div>
                            <div className="info">
                                <p className="info-title">Lucro</p>
                                <p className="info-detail">{getMoneyValue(m.movie.revenue - m.movie.budget)}</p>
                            </div>                          
                        </div>
                    </div>
                    <div className="movie-extra">
                        <div className="genres">
                            {m.movie.genres && m.movie.genres.map((genre, index) => {
                                return <Genre title={genre.name} key={index}/>
                            })}
                        </div>
                        <VoteAverage average={m.movie.vote_average} style={{width: "120px", height: "120px"}} fontSize={"45px"}/>
                    </div>
                </div>
                <img className="movie-poster" src={getImageUrl(m.movie.poster_path)} alt="poster"/>
            </div>
            {m.movie && m.movie.videoKey && 
                <iframe title="film-trailer" className="movie-trailer" width="100%" height="100%"
                    src={getUrlVideo(m.movie.videoKey)}>
                </iframe>                
            }
        </div>
    </Layout>)
}