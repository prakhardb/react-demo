import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
                    <Link to="/" className="item">Home</Link>
                    <Link to="/favourite" className="item">Favourite</Link>
                    <Link to="/unfavourite" className="item">Unfavourite</Link>
            </div>
        );
    };
};



export default Header;