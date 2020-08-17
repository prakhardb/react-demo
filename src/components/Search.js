import React, { useState } from "react";


const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState("");
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }
    const handleSearchTypeChanges = (e) => {
        setSearchType(e.target.value);
    }
    const resetInputField = () => {
        setSearchValue("");
        setSearchType("");
      }
    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue,searchType);
        resetInputField();
    }

    return (
        <form className="search">
            <div className="ui input focus">
            <input
                className="ui input"
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
                placeholder="Enter name for search"
            />
           </div>
            <select className="ui pointing dropdown" name="types" id="types" onChange={handleSearchTypeChanges} value={searchType} form="search">
                <option value="">All</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episodes">Episode</option>
            </select>
            <input className="ui button" style={{marginLeft:'20px', height:'38px'}} onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    );
}

export default Search;