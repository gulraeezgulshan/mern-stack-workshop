import React from "react";

const TodoBanner = ({ name, tasks }) => {
  return (
    <h4 className="bg-primary text-white text-center p-2">
      {name}'s To Do List ({tasks.filter((t) => !t.done).length} items to do)
    </h4>
  );
};

export default TodoBanner;
