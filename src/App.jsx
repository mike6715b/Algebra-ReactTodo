// import SubmitItem from "./Components/SubmitItem";
// import Items from "./Components/Items";

// function App() {
//   return (
//     <div>
//       <SubmitItem />
//       <Items />
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import SubmitItem from "./Components/SubmitItem";
import Items from "./Components/Items";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newId: 0,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      name: e.target.elements.name.value,
      id: this.state.newId,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      newId: this.state.newId + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <SubmitItem handler={this.handleSubmit} />
        <Items items={this.state} />
      </div>
    );
  }
}

export default App;
