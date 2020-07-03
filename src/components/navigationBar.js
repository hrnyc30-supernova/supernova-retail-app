import React from "react";

import search from "../assets/search-white.png";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div id="nav-bar">
        <span id="logo">Greenfield</span>
        <span id="main-search">
          <input
            type="text"
            name="search"
            id="search-bar"
            value={this.state.search}
            onChange={(event) => this.handleFormChange(event)}
          ></input>
          <img type="submit" className="search-icon" src={search}></img>
        </span>
      </div>
    );
  }
}

export default NavigationBar;
