import React from 'react';
import {Link} from 'react-router-dom';
import './TeamSearch.css'




const TeamSearch = (props) => (

    <div className="pageTitle">
        <div className="searchBar">
        <input onChange={(e) => props.handleOnChange(e)} placeholder="Search a team" />
        <Link to='/showpage'>
        <button onClick={props.handleOnClick}>Search</button>
        </Link>
        </div>
    </div>
)




export default TeamSearch;