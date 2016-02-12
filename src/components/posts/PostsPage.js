import { map } from 'lodash';

import React from 'react';
import Post from './Post';
import PostStore from '../../stores/posts/PostStore';
import { Link } from 'react-router';

class PostsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    PostStore.getResources().then(data => {
      this.setState({
        loaded: true,
        posts:  data.posts
      });
    });
  }

  render() {
    if (!this.state.loaded) { return <div>Loading...</div>; }

    let posts = map(this.state.posts, function(post) {
      return <Post key={post.id} post={post} />;
    });

    return (
      <ul>
        {posts}
        <Link to={`/posts/new`} className="btn btn-xs btn-success">Add</Link>
      </ul>
    )
  }

}

PostsPage.displayName = 'postsPostsPage';

// Uncomment properties you need
// PostsPage.propTypes = {};
// PostsPage.defaultProps = {};

export default PostsPage;
