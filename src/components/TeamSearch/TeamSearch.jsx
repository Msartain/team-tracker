import React from 'react';
import {Link} from 'react-router-dom';




const TeamSearch = (props) => (

    <div>
        <input onChange={(e) => props.handleOnChange(e)} placeholder="Search a team" />
        <Link to='/showpage'>
        <button onClick={props.handleOnClick}>Search</button>
        </Link>
    </div>
)




export default TeamSearch;