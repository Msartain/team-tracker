import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";


// in Home Page I need a search input and submit button
// it must fetch data from third party api with football stats

const HomePage = props => {
  return (
    <div className="bg">
        <div className="container">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Welcome to Pitch Sitch!</h5>
          <p class="card-text">
            A Premier League search tool to keep track of your favorite teams. 
          </p>
          <Link to='/search'>
          <button class="btn btn-primary">
            Search
          </button>
          </Link>

        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
