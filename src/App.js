import React, { Component } from "react";
import "bulma/bulma.sass";
import Characters from "./components/Characters";
import Header from "./components/Header";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <section className="section">
          <Characters />
        </section>
      </React.Fragment>
    );
  }
}

export default App;
