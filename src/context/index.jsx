import React, { Component } from "react";

const MyContext = React.createContext();
class MyProvider extends React.Component {
  state = {
    stage: 1,
    players: [],
    result: "",
  };
  addPlayerhandler = (name) => {
    this.setState((prevState) => ({
      players: [...prevState.players, name],
    }));
  };
  render() {
    return (
      <MyContext.Provider
        value={{ state: this.state, addPlayer: this.addPlayerhandler }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
