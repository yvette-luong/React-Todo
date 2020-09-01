// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-list">
      {props.todos.map((item) => (
        <Todo
          key={item.id}
          toggleItem={props.toggleItem}
          item={item}
     
        />
      ))}
      <button className="clear-btn" onClick={props.filterComplete}>Clear Tasks</button>
    </div>
  );
};

export default TodoList;
