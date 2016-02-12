import React from 'react';
import PostForm from './PostForm';
import PostStore from '../../stores/posts/PostStore';

import LazyLoad from 'react-lazy-load';

class EditPostPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.history = this.props.history;
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  componentDidMount() {
    PostStore.getResource(this.props.params.postId).then(data => {
      this.setState({
        loaded: true,
        post:   data.post
      });
    });
  }

  handleSuccess() {
    // this.context.router.transitionTo('posts');
    let query = {};
    this.history.pushState(null, `/`, query);
    // this.history.replaceState(null, `/users/${user.id}`, query);
  }

  render() {
    if (!this.state.loaded) { return <div>Loading...</div>; }

    return (
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            Scroll to load images.
            <div className="filler" />
            <LazyLoad height={762} threshold={100}>
              <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
            </LazyLoad>
            <div className="filler" />
            <LazyLoad height={683}>
              <img src='http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg' />
            </LazyLoad>
            <div className="filler" />
            <LazyLoad height={480}>
              <img src='http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif' />
            </LazyLoad>
            <div className="filler" />
            <LazyLoad height={720}>
              <img src='http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg' />
            </LazyLoad>
            <div className="filler" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <LazyLoad height={300}>
            <PostForm
              resource={this.state.post}
              onSuccess={this.handleSuccess}
              onDestroy={this.handleSuccess} />
          </LazyLoad>
          <div className="filler" />
        </div>
    )
  }

}

EditPostPage.contextTypes = {
  router: React.PropTypes.func
};

EditPostPage.displayName = 'postsEditPostPage';

// Uncomment properties you need
// EditPostPage.propTypes = {};
// EditPostPage.defaultProps = {};

export default EditPostPage;
