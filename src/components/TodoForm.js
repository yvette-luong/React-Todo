import React, { Component } from "react";

export class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      task: ' ',
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: " " });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Add Todo"
          value={this.state.task}
          onChange={this.onChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
