import React from "react";
import getTeamInfo from "../App/App";
import { Link } from "react-router-dom";

const ShowPage = props => {

  let team = null;
  let league = null;
  let display = null;

  console.log(team)
  console.log(league)
  

  async function handleAddTeam() {
    //fetch call to backend
    await fetch("/api/teams/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: props.user.email,
        team_id: team.team_id,
        country: team.country,
        founded: team.founded,
        logo: team.logo,
        name: team.name,
        venue_name: team.venue_name,
        venue_capacity: team.venue_capacity
      })
    });
  }
  if(props.team.length > 0 ){
      team = props.team[0].api.teams[0]
      league = props.team[1].api.standings[0]
      display = (  
        <div>
            <div className='teamInfo'>
                <img src={team.logo} alt="Team Logo" />
                <p>Team name: {team.name}</p>
                <p>Year founded: {team.founded}</p>
                <p>Country: {team.country}</p>
                <p>Venue name: {team.venue_name}</p>
                <p>Venue capacity: {team.venue_capacity}</p>
            </div>
            <div className="leagueInfo">
                <th>team Name</th>
                <th>Points</th>
                <tr><td>{league[0].teamName}</td><td>{league[0].points}</td></tr>
                <tr><td>{league[1].teamName}</td></tr>
                <tr><td>{league[2].teamName}</td></tr>
                <tr><td>{league[3].teamName}</td></tr>
                <tr><td>{league[4].teamName}</td></tr>
                <tr><td>{league[5].teamName}</td></tr>
                <tr><td>{league[6].teamName}</td></tr>
                <tr><td>{league[7].teamName}</td></tr>
                <tr><td>{league[8].teamName}</td></tr>
                <tr><td>{league[9].teamName}</td></tr>
                <tr><td>{league[10].teamName}</td></tr>
                <tr><td>{league[11].teamName}</td></tr>
                <tr><td>{league[12].teamName}</td></tr>
                <tr><td>{league[13].teamName}</td></tr>
                <tr><td>{league[14].teamName}</td></tr>
                <tr><td>{league[15].teamName}</td></tr>
                <tr><td>{league[16].teamName}</td></tr>
                <tr><td>{league[17].teamName}</td></tr>
                <tr><td>{league[18].teamName}</td></tr>
                <tr><td>{league[19].teamName}</td></tr>
                    
                
            </div>
      </div>  
      )
  }
  console.log(team)
  return (
      <div>
        <h1>This is the Show page</h1>
        {display}
        <Link to="/myteams">
            <button onClick={handleAddTeam}>Add to My Teams</button>
        </Link>
    </div>
  );
};

export default ShowPage;
