import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>{this.props.item.name}</p>;
  }
}

export default Item;
