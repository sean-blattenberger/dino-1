import React from "react";

class Jobs extends React.Component {
  render() {
    return (
      <section>
        <h1>Job Listings</h1>
        <ul className="job-listings">
          {this.props.listings.map((listing, i) => (
            <li key={i}>
              <h4>{listing.title}</h4>
              <small>{listing.pay}</small>
              <p>{listing.description}</p>
              <small>{listing.interested.length} {listing.interested.length === 1 ? 'dino is' : 'dinos are'} interested in this job.</small>
            </li>
        )).reverse()}
        </ul>
      </section>
    )
  }
}

export default Jobs;
