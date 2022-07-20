import React from "react";

const Items = (props) => {
  return (
    <div>
      {props.todos.map((todo, idx) => (
        <div key={idx}>
          <p>{todo.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Items;
