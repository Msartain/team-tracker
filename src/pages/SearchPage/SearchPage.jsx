import React from "react";
import './SearchPage.css'
import TeamSearch from "../../components/TeamSearch/TeamSearch";

const SearchPage = props => {
  return (
    <div className="search-container">
       <div className="container">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Search for a team.</h5>
            <p className="card-text">
              Pitch Sitch currently only supports The Premier League. Check back soon for future enhancements!
            </p>
            <TeamSearch
              handleOnClick={props.handleOnClick}
              handleOnChange={props.handleOnChange}
            />
          </div>
        </div>
    </div>
    </div>
  );
};

export default SearchPage;
