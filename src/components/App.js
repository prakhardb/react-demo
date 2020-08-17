import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Header from './Header';
import history from '../history';
import Favourite from './Favourite';
import Unfavourite from './Unfavourite';
const App = () => {
    return <div className="ui container">
        <Router history={history}>
        <div>
            <Header/>
            <Route path="/" exact component={Home} />
            <Route path="/favourite" exact component={Favourite} />
            <Route path="/unfavourite" exact component={Unfavourite} />
            <Route path="/movie/:id" exact component={MovieDetails} />
        </div>
        </Router>
        </div>;
        
}

export default App;