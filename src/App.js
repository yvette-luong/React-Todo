import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import  "./components/Todo.css"
const todos = [{}];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  toggleItem = (id) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  filterComplete = () => {
    this.setState({
      todos: this.state.todos.filter((task) => task.completed === false)
    });
  };

  addTodo = (todoItem) => {
    const newTodo = {
      task: todoItem,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  // clearTodo = (e) => {
  //   this.setState({
  //     todos: this.state.todos.map(todo=> {
  //       return {
  //         ...todo,
  //         completed: false
  //       }
  //     })
  //   });
  // };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
          // clearTodo={this.clearTodo}
          filterComplete={this.filterComplete}
        />
      </div>
    );
  }
}

export default App;
