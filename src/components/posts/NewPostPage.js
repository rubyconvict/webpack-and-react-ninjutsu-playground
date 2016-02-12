import React from 'react';
import PostForm from './PostForm';

class NewPostPage extends React.Component {

  constructor(props) {
    super(props);
    this.history = this.props.history;
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  handleSuccess() {
    // this.context.router.transitionTo('posts');
    let query = {};
    this.history.pushState(null, `/`, query);
    // this.history.replaceState(null, `/users/${user.id}`, query);
  }

//  <PostForm
//    resource={{}}
//    onSuccess={this.handleSuccess} />

// {React.cloneElement(this.props.children, {myprop: this.route.myprop})}
  render() {
    return (
      <div>
        <PostForm
          resource={{}}
          onSuccess={this.handleSuccess} />
      </div>
    )
  }

}

NewPostPage.contextTypes = {
  router: React.PropTypes.func
};

NewPostPage.displayName = 'postsNewPostPage';

// Uncomment properties you need
// NewPostPage.propTypes = {};
// NewPostPage.defaultProps = {};

export default NewPostPage;
