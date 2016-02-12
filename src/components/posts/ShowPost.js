'use strict';

import React from 'react';
import PermitComponent from '../Permit';
import PostStore from '../../stores/posts/PostStore';

import { Link } from 'react-router';

require('../../styles/myNamespace/MyComponent.scss');

class ShowPostComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.history = this.props.history;
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  componentDidMount() {
    PostStore.getResource(this.props.params.postId).then(data => {
      this.setState({
        loaded: true,
        post:   data.post
      });
    });
  }

  handleDestroy(e) {
    PostStore.destroyResource(this.state.post).then(data => {
      let query = {};
      this.history.pushState(null, `/`, query);
    });
  }

  render() {
    if (!this.state.loaded) { return <div>Loading...</div>; }

    let destroyButton;
    if (this.state.post.id) {
      destroyButton = <button className="btn btn-danger pull-right" onClick={this.handleDestroy}>Delete</button>;
    }

    return (
      <div className="showpost-component">
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.body}</p>
        <PermitComponent policy='PostPolicy' action='update' record={this.state.post}>
          <Link to={`/posts/${this.state.post.id}/edit`} className="btn btn-xs btn-info">Edit</Link>
        </PermitComponent>
        <PermitComponent policy='PostPolicy' action='destroy' record={this.state.post}>
          {destroyButton}
        </PermitComponent>
      </div>
    );
  }
}

ShowPostComponent.displayName = 'postsShowPostComponent';

// Uncomment properties you need
// ShowPostComponent.propTypes = {};
// ShowPostComponent.defaultProps = {};


export default ShowPostComponent;
