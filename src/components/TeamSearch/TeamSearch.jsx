import React from 'react';
import {Link} from 'react-router-dom';
import './TeamSearch.css'




const TeamSearch = (props) => (

    <div className="pageTitle">
        <div className="searchBar">
        <input class="form-control mr-sm-2" onChange={(e) => props.handleOnChange(e)} placeholder="Search a team" />
        <Link to='/showpage'>
        <button class="btn btn-outline-success my-2 my-sm-0" onClick={props.handleOnClick}>Search</button>
        </Link>
        </div>
    </div>
)




export default TeamSearch;