import React from "react";
import Item from "./Item";

const Items = (props) => {
  return (
    <div>
      {props.todos.map((todo, idx) => (
        <div key={idx}>
          <Item todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default Items;
