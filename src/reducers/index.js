import { combineReducers } from "redux";
import _ from 'lodash';
const moviesReducer = (state ={}, action) => {
    switch (action.type) {
        case "SEARCH_MOVIES":
            return {..._.mapKeys(action.payload, "imdbID")};    
        default:
            return state;
    }
};

const favouriteReducer = (state={}, action) => {
    switch (action.type) {
        case "ADD_FAVOURITE": 
         return {...state,...action.payload };
        case "REMOVE_FAVOURITE":
         return {...state, ...action.payload };
         default:
            return state;
    }
}

const selectedMovieReducer = (state ={}, action) => {
    switch (action.type) {
        case "SELECTED_MOVIE":
            return action.payload;    
        default:
            return state;
    }
};

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer,
    favouriteMovies: favouriteReducer
});