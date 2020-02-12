import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import getTeamInfo from '../../utils/team-search-api';
import 'bootstrap/dist/css/bootstrap.min.css';



// page imports
import HomePage from "../HomePage/HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import MyTeamsPage from "../MyTeamsPage/MyTeamsPage";
import SearchPage from "../SearchPage/SearchPage";
import ShowPage from "../ShowPage/ShowPage";

//component imports
import NavigationBar from "../../components/NavBar/NavBar";

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
      <div className="parent">
        <div>
          <NavigationBar user={this.state.user} handleLogout={this.handleLogout} history={this.history}/>
        </div>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route
            exact
            path="/myteams"
            render={({ history }) => <MyTeamsPage 
              user={this.state.user}
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






