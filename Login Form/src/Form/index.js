import React, { Component } from 'react';
import './index.css';
//export {Button}
export default class Button extends Component{
  constructor(){
    super();    
  }
  printing(){
      return alert('clicked');
    }
  submit(){

  }
  render(){
    //const {children}=this.props;
    return(
      <form className='form' onSubmit={this.submit}>
        <h1>Hello World</h1>
        <fieldset>
          <label>Your name: </label>
          <input/>
        </fieldset>
        <fieldset>
          <label>Your email:</label>
          <input type="email"/>
        </fieldset>
        <fieldset>        
          <label>Your Message:</label>
          <textArea></textArea>
        </fieldset>
        <input type="submit"/>
      
      </form>
      );
  }
}