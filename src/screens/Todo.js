import React, { Component } from "react";

class Todo extends Component {
    state={
        inputValue:"",
    }
  render() {
    return (
      <div>
        <input type="text" placeholder="Todo giriniz" value={this.state.inputValue} onChange={(e)=>{
            this.setState({inputValue:e.target.value});
        }} />
        <button>Ekle</button>
        <h2>{
              this.state.inputValue
            }</h2>
        <ul></ul>
      </div>
    );
  }
}


export default Todo;