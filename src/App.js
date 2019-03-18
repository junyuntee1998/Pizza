import React, { Component } from 'react';
import './App.css';
import TextBox from './Textbox';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      size: ''
    };
    
    this.handleChange = this.handleChange.bind(this);

  }
  
  handleChange(event) {
    this.setState({
      size: event.target.value
    });
  }
  
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="title">Select a pizza size:</p>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="small"
                checked={this.state.size === "small"}
                onChange={this.handleChange}
              />
              Small
            </label>
          </li>
          
          <li>
            <label>
              <input
                type="radio"
                value="medium"
                checked={this.state.size === "medium"}
                onChange={this.handleChange}
              />
              Medium
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="large" 
                checked={this.state.size === "large"}
                onChange={this.handleChange}
              />
              Large
            </label>
          </li>
        </ul>
        {
              this.state.size === "large" && 
              <TextBox maxlength="20" />
         }
         
<p>{this.state.size}</p>
      </form>
    );
  }
}
export default App;
