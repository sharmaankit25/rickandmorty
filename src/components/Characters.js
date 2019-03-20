import React, { Component } from "react";
import { get_characters } from "../Api";
import Details from "../components/Details";
import Model from "../components/Model";
import Pagination from "../components/Pagination";

class Characters extends Component {
  state = {
    characters: [],
    info: {},
    active_character: {},
    page: 1
  };
  async componentDidMount() {
    let characters = await get_characters(this.state.page);
    this.setState({
      characters: characters.results,
      info: characters.info
    });
  }

  viewDetails = (e, i) => {
    e.preventDefault();
    this.setState({
      active_character: this.state.characters[i]
    });
  };

  renderCharacters = () => {
    return this.state.characters.map((character, index) => {
      return (
        <div className="column is-one-quarter" key={character.id}>
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={character.image} alt={character.name} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{character.name}</p>
                  <p className="subtitle is-6">
                    {character.status} -- {character.gender} --{" "}
                    {character.species}
                  </p>
                </div>
              </div>
              <div className="content">{character.type}</div>
              <button
                onClick={e => this.viewDetails(e, index)}
                className="is-primary button"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  next = async e => {
    e.preventDefault();
    let current_page = this.state.page;
    let characters = await get_characters(current_page + 1);
    this.setState({
      page: current_page + 1,
      characters: [...this.state.characters, ...characters.results],
      active_character: {}
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2 className="title has-text-centered">Characters</h2>
        <h4 className="subtitle">Total Characters : {this.state.info.count}</h4>
        <div className="columns is-multiline">
          {this.state.characters.length
            ? this.renderCharacters()
            : "INITIATING APP ....."}
        </div>
        <Pagination
          next={this.next}
          status={this.state.page >= this.state.info.pages ? false : true}
        />
        <Model status={this.state.active_character.name ? true : false}>
          <Details details={this.state.active_character} />
        </Model>
      </React.Fragment>
    );
  }
}

export default Characters;
