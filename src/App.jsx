import React from "react";
import { MyContext } from "./context";
import Stage1 from "./components/Stage_1";
import Stage2 from "./components/Stage_2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  static contextType = MyContext;

  render() {
    return (
      <div className="wrapper">
        <div className="center-wrapper">
          <h1>Qui Qui paye .....???</h1>
          {this.context.state.stage === 1 ? <Stage1 /> : <Stage2 />}
        </div>
      </div>
    );
  }
}

export default App;
