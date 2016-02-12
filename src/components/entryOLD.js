require('expose?$!expose?jQuery!jquery');
require('bootstrap.js');

import React from 'react';
//var React = require('react');
import ReactDOM from 'react-dom';

// changed to async below
//import Home from './Home';

//import ShowPostComponent from './posts/ShowPost';

// Render the main component into the dom
//ReactDOM.render(<ShowPostComponent post={{'id': 1, 'title': 'zzz', 'body': 'aaa'}}/>, document.getElementById('app2'));

//import App from './App';
//ReactDOM.render(<App />, document.getElementById('app2'));

var resolveRoute = function () {

  if (!location.hash || location.hash.length === 1) {
  //  require.ensure([], function () {
  //    var Home = require('./Home.js');
  //    ReactDOM.render(Home(), document.getElementById('app'));
  //  });
    require.ensure([], function () {
      //var Home = require('./Home');
      //ReactDOM.render(<Home />, document.getElementById('app'));
      // looks more like this:
      let router = require('../router/routes');
      ReactDOM.render(router, document.getElementById('app4'));
    });
  } else if (location.hash === '#admin') {
    require.ensure([], function () {
      //ReactDOM.render(Admin, document.getElementById('app'));
      // var Admin = React.createFactory(require('./Admin.js'));
      // React.createElement(Admin, { foo: 'bar' });

      // changed to async above
      var Admin = require('./Admin');
      ReactDOM.render(<Admin />, document.getElementById('app'));

    });
  }
};

window.onhashchange = resolveRoute;
resolveRoute();

// window.console.log('>>>>>>');
// window.console.log(module);
// window.console.log('<<<<<');

// If hot swapping can be done, do it by resolving the current route
// and render the application again
//if (module.hot) {
//  module.hot.accept(resolveRoute);
//}
