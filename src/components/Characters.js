import React, { Component } from "react";
import { get_characters } from "../Api";
import Details from "../components/Details";
import Model from "../components/Model";

class Characters extends Component {
  state = {
    characters: [],
    info: {},
    active_character: {}
  };
  async componentDidMount() {
    let characters = await get_characters();
    this.setState({
      characters: characters.results,
      info: characters.info
    });
  }

  viewDetails = i => {
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
            </div>
            <footer className="card-footer">
              <button
                onClick={() => this.viewDetails(index)}
                className="card-footer-item is-primary button"
              >
                Details
              </button>
            </footer>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2 className="title">Characters</h2>
        <div className="columns is-multiline">
          {this.state.characters.length
            ? this.renderCharacters()
            : "INITIATING APP ....."}
        </div>
        <Model status={this.state.active_character.name ? true : false}>
          <Details details={this.state.active_character} />
        </Model>
      </React.Fragment>
    );
  }
}

export default Characters;
