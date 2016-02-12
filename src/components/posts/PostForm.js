import React from 'react';
import CategoryStore from '../../stores/categories/CategoryStore';
import PostStore from '../../stores/posts/PostStore';

import BaseForm from '../forms/BaseForm';
import SelectInput from '../forms/SelectInput';
import TextInput from '../forms/TextInput';
import TextareaInput from '../forms/TextareaInput';

import { Link } from 'react-router';

class PostForm extends BaseForm {

  constructor(props) {
    super(props);
    this.store = PostStore;
  }

  componentDidMount() {
    CategoryStore.getResources().then(data => {
      this.setState({
        loaded:     true,
        categories: data.categories
      });
    });
  }

  render() {
    if (!this.state.loaded) { return <div>Loading...</div>; }

    let destroyButton;
    if (this.props.resource.id) {
      destroyButton = <button className="btn btn-danger pull-right" onClick={this.handleDestroy}>Delete</button>;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <SelectInput {...this.getInputProps('category_id')} options={this.state.categories} />
        <TextInput {...this.getInputProps('title')} autoFocus={true} />
        <TextareaInput {...this.getInputProps('body')} />
        <Link to={`/`} className="btn btn-default">Cancel</Link>
        <button type="submit" className="btn btn-primary pull-right">Save</button>
        {destroyButton}
      </form>
    )
  }

}

PostForm.displayName = 'postsPostForm';

// Uncomment properties you need
// PostForm.propTypes = {};
// PostForm.defaultProps = {};

export default PostForm;
