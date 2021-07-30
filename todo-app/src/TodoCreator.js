import React from "react";

const TodoCreator = () => {
  const [newItemText, setNewItemText] = React.useState("");

  const updateNewTextValue = (e) => {
    setNewItemText(e.target.value);
  };

  const createNewTodo = () => {
    if (!todoItems.find((item) => item.action === newItemText)) {
      setTodoItems([...todoItems, { action: newItemText, done: false }]);
      setNewItemText("");
    }
  };

  return (
    <div className="my-1">
      <input
        className="form-control"
        value={newItemText}
        onChange={updateNewTextValue}
      />
      <button className="btn btn-primary mt-1" onClick={createNewTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoCreator;
