import React, { Component } from "react";
import { connect } from 'react-redux';
import { selectMovie, addFavourite, removeFavourite } from '../actions';

class MovieDetails extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.selectMovie(id);
}

addFavourite = (e)=> {
  e.preventDefault();
    this.props.addFavourite(this.props.movie);
}
removeFavourite = (e)=> {
  e.preventDefault();
    this.props.removeFavourite(this.props.movie);
}

renderMovie() {
  let poster;
  const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
  if(this.props.movie.Poster === 'N/A'){
    poster = DEFAULT_PLACEHOLDER_IMAGE;
  } else {
    poster = this.props.movie.Poster;
  }
  var favButton;
  if(this.props.favouriteMovie.hasOwnProperty(this.props.movie.imdbID) && this.props.favouriteMovie[this.props.movie.imdbID].isFavourite){
    favButton = <button className="ui button" onClick={this.removeFavourite}>Unfavourite</button>
  } else {
    favButton = <button className="ui button" onClick={this.addFavourite}>Favourite</button>;
  }
return(  
  <div style={{marginTop: '20px'}} className="ui center segment">
    <h2 className="ui header" style={{textAlign: 'center'}}>{this.props.movie.Title}</h2>
  <div className="ui clearing divider"></div>
  <div className="ui two column very relaxed grid">
    <div style={{paddingBottom:'20px', paddingTop: '20px', paddingLeft:'40px'}}>
        <img alt={this.props.movie.Title} src={poster}/>
    </div>
    <div className="column">
    <p><strong>Release Date:</strong> {this.props.movie.Released} </p>
      <p><strong>Actors:</strong> {this.props.movie.Actors}</p>
      <p><strong>Director:</strong> {this.props.movie.Director}</p>
      <p><strong>Writer:</strong> {this.props.movie.Writer}</p>
      <p><strong>Production:</strong> {this.props.movie.Production}</p>
      <p><strong>Genre:</strong> {this.props.movie.Genre}</p>
      <p><strong>Awards:</strong> {this.props.movie.Awards}</p>
      <p><strong>Plot:</strong> {this.props.movie.Plot}</p>
      <p><strong>BoxOffice:</strong> {this.props.movie.BoxOffice}</p>
      <p><strong>IMDB Ratings:</strong> {this.props.movie.imdbRating}</p>
      {favButton}
    </div>
  </div>
</div>
  )
}

render() {
return <div>{this.renderMovie()}</div>
}
}


const mapStateToProps = (state) => {
  return {
      movie: state.selectedMovie,
      favouriteMovie: state.favouriteMovies
  }
}

export default connect(mapStateToProps, { selectMovie, addFavourite, removeFavourite })(MovieDetails);