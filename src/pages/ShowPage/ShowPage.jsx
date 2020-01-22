import React from "react";
import getTeamInfo from "../App/App";
import { Link } from "react-router-dom";
import "./ShowPage.css";

const ShowPage = props => {
    
  let team = null;
  let league = null;
  let display = null;

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


  if (props.team.length > 0) {
    team = props.team[0].api.teams[0];
    league = props.team[1].api.standings[0];
    display = (
      <div class="jumbotron">
        <div className="teamContainer">
          <div className="teamInfo">
            <h1 class="display-4">{team.name}</h1>
            <img src={team.logo} alt="Team Logo" />
            <p>Year founded: {team.founded}</p>
            <p>Country: {team.country}</p>
            <p>Venue name: {team.venue_name}</p>
            <p>Venue capacity: {team.venue_capacity}</p>
            {props.user ? (
              <Link to="/myteams">
                <button class="btn btn-primary brn-lg" onClick={handleAddTeam}>
                  Add to My Teams
                </button>
              </Link>
            ) : (
              <Link to="/signup">
                <button class="btn btn-primary brn-lg">
                  Sign up to save teams!
                </button>
              </Link>
            )}
          </div>

          <div className="leagueInfo">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Pos</th>
                  <th></th>
                  <th scope="col">Team</th>
                  <th scope="col">Points</th>
                  <th scope="col">GD</th>
                  <th scope="col">Form</th>
                </tr>
              </thead>
              <tbody>
                {league.map(league => (
                  <tr>
                    <td>{league.rank}</td>
                    <td>
                      <img src={league.logo} width="30" height="30" />
                    </td>
                    <td>{league.teamName}</td>
                    <td>{league.points}</td>
                    <td>{league.goalsDiff}</td>
                    <td>{league.forme}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  return <div>{display}</div>;
};

export default ShowPage;
