import React from "react";

const TodoRow = (props) => {
  return (
    <tr>
      <td>{props.item.action}</td>
      <td>
        <input
          type="checkbox"
          checked={props.item.done}
          onChange={() => props.callback(this.props.item)}
        />
      </td>
    </tr>
  );
};

export default TodoRow;
