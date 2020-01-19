import React from 'react';
import getTeamInfo from '../App/App';
import {Link} from 'react-router-dom';





const ShowPage = (props) => {

    async function handleAddTeam(){
        //fetch call to backend
        await fetch('/api/teams/add',
            {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                user: props.user.email,
                team_id: props.team.team_id,
                country: props.team.country,
                founded: props.team.founded,
                logo: props.team.logo,
                name: props.team.name,
                venue_name: props.team.venue_name,
                venue_capacity: props.team.venue_capacity})
            }
          );
        }
    
    return (
        <div>
          <h1>This is the Show page</h1>
          <img
            src={props.team.logo}
            alt='Team Logo'
            />
            <p>{props.team.name}</p>
            <p>{props.team.founded}</p>
            <Link to='/myteams'>
            <button onClick={handleAddTeam}>Add to My Teams</button>
            </Link>
        </div>
      );
}


export default ShowPage;