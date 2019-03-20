import React, { Component } from "react";

class Pagination extends Component {
  render() {
    if (this.props.status) {
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
    } else {
      return "";
    }
  }
}

export default Pagination;
