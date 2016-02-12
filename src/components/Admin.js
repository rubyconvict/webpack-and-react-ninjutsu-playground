require('styles/App.scss');

//import React from 'react';
var React = require('react');

let yeomanImage = require('images/yeoman.png');

class AdminComponent extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          refLink: ''
      }
  }

  render() {
    return (
      <div className="index">
        <h1>Hello Admin?!!</h1>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <a tabIndex={0} className="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
        <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on left</button>
        <div className="notice">Please edit <code>src/components/Admin.js</code> to get started!</div>
      </div>
    );
  }
}

//AdminComponent.defaultProps = {
//};

export default AdminComponent;
