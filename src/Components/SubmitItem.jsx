import React from "react";

const SubmitItem = (props) => {
  return (
    <div>
      <form onSubmit={props.handler}>
        <input type="text" name="todo" />
        <input type="submit" value="Add todo" />
      </form>
    </div>
  );
};

export default SubmitItem;
