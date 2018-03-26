import React, { Component } from "react";
import "../App.css";
// import listings from "../listings.json";
import dinoLogo from "../assets/g-dino.png";
import Jobs from "../components/Jobs";
import JobForm from "../components/JobForm";

const Header = () => {
  return (
    <header>
      <img src={dinoLogo} alt="Dino Logo" />
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <small>Copyright 2018</small>
    </footer>
  );
};

class App extends Component {
  state = {
    listings: []
  };
  fetchListings() {
    return fetch("./listings.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ listings: data });
      });
  }
  componentDidMount() {
    this.fetchListings()
  }

  addJobListing = job => {
    this.setState({
      listings: this.state.listings.concat(job)
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Jobs listings={this.state.listings} />
          <JobForm addJobListing={this.addJobListing} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
