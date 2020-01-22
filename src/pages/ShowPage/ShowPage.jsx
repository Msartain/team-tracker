import React from "react";
import getTeamInfo from "../App/App";
import { Link } from "react-router-dom";
import './ShowPage.css'

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
        <div className='teamContainer'>
            <div className='teamInfo'>
                <img src={team.logo} alt="Team Logo" />
                <p>Team name: {team.name}</p>
                <p>Year founded: {team.founded}</p>
                <p>Country: {team.country}</p>
                <p>Venue name: {team.venue_name}</p>
                <p>Venue capacity: {team.venue_capacity}</p>
            </div>
            <div className="leagueInfo">
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Pos</th>
                            <th scope="col">Team</th>
                            <th scope="col">Points</th>
                            <th scope="col">Form</th>
                        </tr>
                    </thead>
                    <tbody>
                        {league.map(league => (
                            <tr><td>{league.rank}</td><td>{league.teamName}</td><td>{league.points}</td><td>{league.forme}</td></tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>  
      )
  }
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
