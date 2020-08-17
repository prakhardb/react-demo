import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { selectMovie } from '../actions';

class Unfavourite extends Component {
    select = (movie) => {
        history.push(`/movie/${movie.imdbID}`);
    };
    renderUnfavMovieList(movies) {
        return movies.map(movie => {
            let poster;
        const DEFAULT_PLACEHOLDER_IMAGE =
            "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
        if (movie.Poster === 'N/A') {
            poster = DEFAULT_PLACEHOLDER_IMAGE;
        } else {
            poster = movie.Poster;
        }
            return (<div key={movie.imdbID} onClick={() => this.select(movie)} className="sixteen wide mobile eight wide tablet four wide computer column">
                <div className="ui card">
                    <div className="image">
                        <img alt={movie.Title} style={{ minHeight: '428px' }} src={poster} />
                    </div>
                    <div className="content">
                        <div className="header">{movie.Title}</div>
                    </div>
                </div>
            </div>
            );
        });
    }
    render() {
        var data = [];
        return (
            <div>
                <div style={{ marginTop: '20px' }} className="ui grid">
                    {this.props.movies.forEach(movie => {
                        if(!movie.isFavourite){
                            data.push(movie);
                        }
                    })}
                    {this.renderUnfavMovieList(data)
                    }
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        movies: Object.values(state.favouriteMovies),
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps, { selectMovie })(Unfavourite);