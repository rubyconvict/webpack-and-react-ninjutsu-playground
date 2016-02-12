'use strict';

import alt from 'components/Dispatcher';
import { MyFunctionStore } from 'stores/myNamespace/MyFunctionStore';
import AltTestingUtils from 'alt/utils/AltTestingUtils';

describe('MyFunctionStore', () => {

  let storeClass;

  // Clean up localStorage before each try
  beforeEach(() => {
    storeClass = AltTestingUtils.makeStoreTestable(alt, MyFunctionStore);
  });
});
