import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <div className="is-centered has-text-centered">
        <button
          className="button is-default is-centered"
          onClick={this.props.next}
        >
          Load More..
        </button>
      </div>
    );
  }
}

export default Pagination;
