import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'isomorphic-fetch';
//import Button from './Form/index.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const DEFAULT_QUERY='redux';
const URL='https://hn.algolia.com/api/v1';
const SEARCH_PATH='/search';
const SEARCH_PARAM='query=';
const urlEndpoint=URL+SEARCH_PATH+'?'+SEARCH_PARAM+DEFAULT_QUERY;
console.log(urlEndpoint);
function isSearched (searchTerm) {
  return (item)=>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());
  
}
class App extends Component {
constructor(props){
    super(props);
    this.state={
      mounted:false
    }
  }
  componentDidMount=()=>{
    this.setState({mounted:true});
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({mounted:false});
  }

  render() {
    var child;
    if (this.state.mounted) {
      child=(<Modal onSubmit={this.handleSubmit}/>);
    };
    return (
      <div className="App">
        
        <ReactCSSTransitionGroup 
                    transitionName="example"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={600}>
                        {child}
                </ReactCSSTransitionGroup>
                      
      </div>
      
    );

  }
}
class Modal extends Component{
  render(){
    return(
      <form onSubmit={this.props.handleSubmit} className="ModalForm">
        <input
            id="name"
            type="text"
            placeholder="Jack-Edward Oliver" />
            <br/><br/>
          <input
            id="username"
            type="email"
            placeholder="mrjackolai@gmail.com" /><br/><br/>
          <input
            id="password"
            type="password"
            placeholder="password" /><br/><br/>
          <button>
            Log in <i className="fa fa-fw fa-chevron-right"></i>
          </button>
      </form>
      )
  }
}
class Form extends Component{
  render(){
    return(
      <div className="Input">
        <input id={this.props.name} autoComplete="false" required type={this.props.type} placeholder={this.props.placeholder} />  
        <label htmlFor={this.props.name}></label>
      </div>
      )
  }
}
export default App;

