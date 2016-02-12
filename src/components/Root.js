import React, { Component } from 'react' // PropTypes
import { Router, Route } from 'react-router' // IndexRoute
import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory()

import PostsPage from './posts/PostsPage'
import NewPostPage from './posts/NewPostPage'
import EditPostPage from './posts/EditPostPage'
import ShowPost from './posts/ShowPost'

// import $ from 'jquery';
// import React from 'react';
import Navigation from './Navigation';

export default class Root extends Component {
  render() {
    return (
        <div>
          <div>
              <Navigation></Navigation>
          </div>
          <Router history={history}>
            <Route path='/' component={PostsPage} />
            <Route path='/posts/new' component={NewPostPage} />
            <Route path='/posts/:postId' component={ShowPost} />
            <Route path='/posts/:postId/edit' component={EditPostPage} />
          </Router>
        </div>
    );
  }
}
