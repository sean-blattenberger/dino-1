import React, { Component } from "react";
import "../App.css";
import Jobs from "../components/Jobs";
import JobForm from "../components/JobForm";
import Header from "../components/Header";
import Footer from "../components/Footer";


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
