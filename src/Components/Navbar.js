import React, { Component } from "react";

class navBar extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <li name='Home' onClick={(e)=>this.props.clickHandel(e)}>Home</li>
        <li  name='About' onClick={(e)=>this.props.clickHandel(e)}>About</li>
        <li  name='Articles' onClick={(e)=>this.props.clickHandel(e)}>Articles</li>
      </div>
    );
  }
}
export default navBar;