import alt from 'utils/alt';
import _BaseStoreApi from '../_BaseStoreApi'
var _ = require('lodash');
//export class PostStore {

//  constructor() {
    // this.bindListeners({});
//    resourceName: 'posts'
//  }
//}

class PostStorePreApified {
  constructor() {
    this.bindListeners({});
    resourceName: 'posts'
  }
}

var PostStoreApified = _.assign(PostStorePreApified, _BaseStoreApi, {
  resourceName: 'posts'
});

var PostStore = alt.createStore(PostStoreApified, 'PostStore');

export default PostStore;
