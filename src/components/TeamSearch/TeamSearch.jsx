import React from 'react';
import {Link} from 'react-router-dom';
import './TeamSearch.css'




const TeamSearch = (props) => (
    <div className="pageTitle">
        <div className="searchBar">
        <input className="form-control mr-sm-2" onChange={(e) => props.handleOnChange(e)} placeholder="Search a team" />
        <Link to='/showpage'>
        <button className="btn btn-success my-2 my-sm-0" onClick={props.handleOnClick}>Search</button>
        </Link>
        </div>
    </div>
)




export default TeamSearch;
