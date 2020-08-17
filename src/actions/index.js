import api from '../apis/api';
import history from '../history';

export const searchMovies = (params,type) => async dispatch => {
    const response = await api.get(`?&s=${params}&apikey=626b4aa6`);
    dispatch({type: 'SEARCH_MOVIES', payload:response.data.Search});
}

export const addFavourite = (movie) => {
    let payload = {[movie.imdbID]: {}};
    payload[movie.imdbID].Title = movie.Title;
    payload[movie.imdbID].Poster = movie.Poster;
    payload[movie.imdbID].imdbID = movie.imdbID;
    payload[movie.imdbID].isFavourite = true;
    payload[movie.imdbID].isUnFavourite = false;
    return ({type: 'ADD_FAVOURITE', payload});
}
export const removeFavourite = (movie) => {
    let payload = {[movie.imdbID]: {}};
    payload[movie.imdbID].Title = movie.Title;
    payload[movie.imdbID].Poster = movie.Poster;
    payload[movie.imdbID].imdbID = movie.imdbID;
    payload[movie.imdbID].isFavourite = false;
    payload[movie.imdbID].isUnFavourite = true;
    return ({type: 'REMOVE_FAVOURITE', payload});
}

export const selectMovie = (id) => async dispatch => {
    const response = await api.get(`?&i=${id}&apikey=626b4aa6`);
    dispatch({type: 'SELECTED_MOVIE', payload:response.data });
    history.push(`/movie/${id}`);
  };