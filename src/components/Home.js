require('styles/App.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import { State, RouteContext, Router, Route, Link, Redirect, DefaultRoute, NotFoundRoute, RouteHandler } from 'react-router';

let yeomanImage = require('../images/yeoman.png');

import reactMixin from 'react-mixin'
import renderRouteChildren from '../utils/renderRouteChildren';

class HomeComponent extends React.Component {

  constructor(props, context) {
      super(props, context);
      // this.router = this.context.router.bind(this);
      this.state = {
          refLink: '',
          something: ''
      }
      // console.log('constructor', context); // empty :(
  }

  //navigateAfterSomethingHappened () {
    // the router is now built on rackt/history, and it is a first class
    // API in the router for navigating
    // this.history.pushState(null, `/posts/${post.id}`, query);
    // this.history.replaceState(null, `/posts/${post.id}`, query);
  //}

  render() {
    return (
      <div className="row index">
        <div className="col-md-12">
          <Link to={`/posts`}>Posts</Link>&nbsp;
          <Link to={`/posts/new`}>Create Post</Link>

          <div className='body'>
            {renderRouteChildren(this.props.children)}
          </div>

{/*
          // because named routes are gone, link to full paths, you no longer need
          // to know the names of the parameters, and string templates are quite
          // nice. Note that `query` has not changed.
          <Link activeClassName="active" to={`/posts/${post.id}/edit`}>Edit</Link>
*/}
{/*
          <div>
            {this.props.children}
            {React.cloneElement(this.props.children, {params: this.props.params, query: this.props.query})}
          </div>
*/}
          <h1>Hello? Home?!!</h1>
          <img src={yeomanImage} alt="Yeoman Generator" />
          <div className="notice">! Please edit <code>src/components/Home.js</code> to get started!</div>

          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
            Launch demo modal
          </button>
          {/* Modal */}
          <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                  <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomeComponent.contextTypes = {
//    router: React.PropTypes.func.isRequired
};

HomeComponent.defaultProps = {
};

reactMixin(HomeComponent.prototype, History);

export default HomeComponent;
