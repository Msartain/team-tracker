import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// page imports
import HomePage from "../HomePage/HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import MyTeamsPage from "../MyTeamsPage/MyTeamsPage";
import SearchPage from "../SearchPage/SearchPage";
import ShowPage from "../ShowPage/ShowPage";

//component imports
import NavBar from "../../components/NavBar/NavBar";

class App extends Component {
  state = {
    user: userService.getUser(),
    teams: [],
    search: ""
  };
  // - - - Auth - - - - - -
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  // - - - - - - Search methods - - - - - -

  handleOnChange = e => {
    this.setState({ search: e.target.value });
  };

  handleOnClick = () => {
    getTeamInfo(this.state.search).then(results => {
      console.log(results);

      this.setState({ teams: results });
    });
  };

  // handleClick2 = async (event) => {
  //     const [team, league] = await getTeamInfo(this.state.search)
  //     this.setState({
  //       team: team,
  //       league: league
  //     })
  // }
  // handleOnClick = () => {
  //   getTeamInfo(this.state.search).then(getLeagueInfo()).then(results => {
  //     this.setState({ teams: results });
  //   })
  // };

  // - - - - lifecycle methods - - - - - - -

  render() {
    return (
      <div>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <div className="pageTitle">
          <p>This is app.js</p>
        </div>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route
            exact
            path="/myTeams"
            render={({ history }) => <MyTeamsPage />}
          />
          <Route
            exact
            path="/search"
            render={({ history }) => (
              <SearchPage
                history={history}
                handleOnChange={this.handleOnChange}
                handleOnClick={this.handleOnClick}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/showpage"
            render={({ history }) => (
              <ShowPage
                history={history}
                team={this.state.teams}
                user={this.state.user}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default App;

async function getTeamInfo(team) {
  // let data = await fetch(
  //   `https://api-football-v1.p.rapidapi.com/v2/teams/search/${team}`,
  //   {
  //     headers: {
  //       "X-RapidAPI-Key": "d690ddb5d3mshc99b2805d0e2c7ap171589jsn1f3bd4c4ffaf"
  //     }
  //   }
  // );
  // let jsonData = await data.json();
  // return await jsonData.api.teams[0];

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  const promiseArray = [
    `https://api-football-v1.p.rapidapi.com/v2/teams/search/${team}`,
    "https://api-football-v1.p.rapidapi.com/v2/leagueTable/524"
  ];
  const options = {
    headers: {
      "X-RapidAPI-Key": "d690ddb5d3mshc99b2805d0e2c7ap171589jsn1f3bd4c4ffaf"
    }
  };
  async function getThings(urls, options) {
    try {
      const data = await Promise.all(
        urls.map(async url => {
          const response = await fetch(url, options);
          const data = await response.json();

          return data;
        })
      ).then(result => result);
      // console.log(team, league);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
  const response = await getThings(promiseArray, options);
  return await response;

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  //     await Promise.all([
  //    fetch(`https://api-football-v1.p.rapidapi.com/v2/teams/search/${team}`).then(value => json()),
  //    fetch('https://api-football-v1.p.rapidapi.com/v2/leagueTable/524').then(value => json()),
  //    {
  //      headers: {"X-RapidAPI-Key": "d690ddb5d3mshc99b2805d0e2c7ap171589jsn1f3bd4c4ffaf"}
  //     }
  //  ])
  //  .then((value) => {
  //    console.log(value)
  //  })
  //  .catch((err) => {
  //   console.log(err);
  // });
  //  let jsonData = await data.json()
  //  console.log(jsonData)
  // }
  // catch(err){
  //   console.log(err)
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// async function getLeagueInfo(){
//   let leagueData = await fetch('https://api-football-v1.p.rapidapi.com/v2/leagueTable/524',
//   {
//     headers: {
//       "X-RapidAPI-Key": "d690ddb5d3mshc99b2805d0e2c7ap171589jsn1f3bd4c4ffaf"
//     }
//   }
//   )
//   let jsonLeagueData = await leagueData.json();
//   console.log(jsonLeagueData.api.standings)
//   return await jsonLeagueData.api.results.standings
// }
