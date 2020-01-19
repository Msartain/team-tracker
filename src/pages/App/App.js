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
  // let t = '';
  // await fetch(`https://api-football-v1.p.rapidapi.com/v2/teams/search/${team}`, {
  //   headers: {
  //     "X-RapidAPI-Key": "d690ddb5d3mshc99b2805d0e2c7ap171589jsn1f3bd4c4ffaf"
  //   }
  // })
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(team => {
  //     // console.log(team.api.teams[0]);
  //     t = team.api.teams[0];
  //     // return t
  //   });
  let data = await fetch(
    `https://api-football-v1.p.rapidapi.com/v2/teams/search/${team}`,
    {
      headers: {
        "X-RapidAPI-Key": "d690ddb5d3mshc99b2805d0e2c7ap171589jsn1f3bd4c4ffaf"
      }
    }
  );
  let jsonData = await data.json();
  return await jsonData.api.teams[0];
}
