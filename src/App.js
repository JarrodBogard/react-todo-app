import React, { Component } from "react";
import TodoCard from "./TodoCard";
import { nanoid } from "nanoid";
// import "./App.css";

// React.Component can be used in place of destructured Component
class App extends Component {
  // also React.Component
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      inputValue: "",
      listOfTodos: [],
    };

    // this.handleClick = this.handleClick.bind(this) no thanks
  }

  // arrow function syntax removes need for bind
  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });

    // this.state.isClicked
    //   ? this.setState({ isClicked: false })
    //   : this.setState({ isClicked: true });
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      listOfTodos: [...this.state.listOfTodos, this.state.inputValue],
      inputValue: "",
    });
    // this.setState({ inputValue: "" });
  };

  deleteItem = (index) => {
    // const copyOfList = this.state.listOfTodos.filter
    // console.log("was clicked", index);
    let copyOfList = this.state.listOfTodos;
    copyOfList.splice(index, 1);
    this.setState({ listOfTodos: [...copyOfList] });
  };

  componentDidUpdate() {
    console.log();
  }

  render() {
    return (
      <div className="app">
        <h2>Todo List</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
        <ol>
          {this.state.listOfTodos.map((todo, index) => {
            return (
              <TodoCard
                key={nanoid()}
                index={index}
                title={todo}
                removeItem={this.deleteItem}
              />
            );
          })}
        </ol>
        {/* <button onClick={this.handleClick}>Click Me</button> */}
        <button onClick={this.handleClick}>
          {this.state.isClicked === true ? "true" : "false"}
        </button>
        {/* <p>{this.state.isClicked ? "true" : "false"}</p> */}
        <div>
          <br></br>
          {/* {this.props.name} */}
        </div>
      </div>
    );
  }
}

export default App;
