import logo from "./logo.svg";
import React from "react";
import "./App.css";
import TodoBanner from "./TodoBanner";
import TodoRow from "./TodoRow";
import TodoCreator from "./TodoCreator";

function App() {
  const data = [
    { action: "Buy Flowers", done: false },
    { action: "Get Shoes", done: false },
    { action: "Collect Tickets", done: true },
    { action: "Call Ali", done: false },
  ];

  const [user, setUser] = React.useState("Gulraiz");
  const [todoItems, setTodoItems] = React.useState([]);

  const toggleTodo = (todo) => {
    setTodoItems(
      todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    );
  };

  const todoTableRows = () =>
    todoItems.map((item) => (
      <TodoRow key={item.action} item={item} callback={toggleTodo} />
    ));

  return (
    <div>
      <TodoBanner name={user} tasks={todoItems} />
      <div className="container-fluid">
        <TodoCreator callback={this.createNewTodo} />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{todoTableRows()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
