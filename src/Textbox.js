import React, { Component } from 'react';

class TextBox extends Component {
	render(){
  console.log('*******', this.props.maxLength);
  	const maxLength = this.props.maxLength || 10;
  	return(
    	<div>
        <div>Add</div>
    	  <input type="text" maxlength={maxLength} />
    	</div>
    );
  }
}

export default TextBox;