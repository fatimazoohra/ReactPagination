

import React, { Component } from "react";
import "./style/bootstrap.min.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import navBar from "./Components/NavBar";

class App extends Component {
  state = {
    page:'Abo'
  };
  handleClick(e){
    // console.log(e.target.getAttribute('name')'+'clicked...');
    //console.log(e.target.name+'clicked...');
    this.setState({page:e.target.getAttribute('name')})
  }
  render() {
    console.log(this.state.page);
    return (
      <div className="App">
        <navBar clickHandel={this.handleClick} />
        <hr/>
        {this.state.page==='Home'?<Home/> :
        this.state.page==='About'?< About/> :<Articles/>}
      </div>
    );
  }
}
export default App;
