import React from 'react';

// import { Router, Route, Link, Redirect, DefaultRoute, NotFoundRoute, RouteHandler } from 'react-router';
var { Router, Route, IndexRoute } = require('react-router');

import Home from '../components/Home';
import PostsPage from '../components/posts/PostsPage';
import NewPostPage from '../components/posts/NewPostPage';
import EditPostPage from '../components/posts/EditPostPage';

//Router.run(routes, Router.HistoryLocation, (Handler, state) => {
//  React.render(<Handler params={state.params} query={state.query} />, document.getElementById('app3'));
//});

import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory()

//<Route path="/" component={Home}>
//  <IndexRoute component={Home}/>
//</Route>

//<DefaultRoute name='posts' component={PostsPage} />

// <Route path="*" component={NoMatch}/>

const router = (
  <Router history={history}>
    <Route path='/' component={Home}>
      <IndexRoute component={PostsPage} />
      <Route path='/posts/new' component={NewPostPage} />
      <Route path='/posts/:postId/edit' component={EditPostPage} />
    </Route>
  </Router>
);

export default router;
