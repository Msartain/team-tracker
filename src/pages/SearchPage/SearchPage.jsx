import React from "react";

import TeamSearch from "../../components/TeamSearch/TeamSearch";

const SearchPage = props => {
  return (
    <div className="pageTitle">
        <div className="searchInput">
      <h1>This is the Search page</h1>
      <TeamSearch
        handleOnClick={props.handleOnClick}
        handleOnChange={props.handleOnChange}
      />
      </div>
    </div>
  );
};

export default SearchPage;
