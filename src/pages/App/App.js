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
      this.setState({ teams: results });
    });
  };

  render() {
    return (
      <div>
        <div>
          <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        </div>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route
            exact
            path="/myTeams"
            render={({ history }) => <MyTeamsPage 
              history={history}
            />}
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
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // fetch for one url

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
  // fetch for multiple urls

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
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  const response = await getThings(promiseArray, options);
  return await response;
}
