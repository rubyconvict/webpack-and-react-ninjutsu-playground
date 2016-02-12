import alt from 'utils/alt';
import _BaseStoreApi from '../_BaseStoreApi'
var _ = require('lodash');
//export class CategoryStore {

//  constructor() {
    // this.bindListeners({});
//    resourceName: 'Categorys'
//  }
//}

class CategoryStorePreApified {
  constructor() {
    this.bindListeners({});
    resourceName: 'categories'
  }
}

var CategoryStoreApified = _.assign(CategoryStorePreApified, _BaseStoreApi, {
  resourceName: 'categories'
});

var CategoryStore = alt.createStore(CategoryStoreApified, 'CategoryStore');

export default CategoryStore;
