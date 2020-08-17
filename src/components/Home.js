import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import history from '../history';
import { searchMovies, selectMovie } from '../actions';

class Home extends Component {
    select = (movie) => {
        history.push(`/movie/${movie.imdbID}`);
    };
    componentDidMount() {
        this.props.searchMovies('avengers', '');
    }
    renderMovieList() {
        return this.props.movies.map(movie => {
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
        return (
            <div>
                <div className="ui column centered grid" style={{ marginTop: '40px' }}><Search search={this.props.searchMovies} /></div>
                <div style={{ marginTop: '20px' }} className="ui grid">
                    {this.renderMovieList()}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        movies: Object.values(state.movies),
        isloading: state.isLoading,
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps, { searchMovies, selectMovie })(Home);