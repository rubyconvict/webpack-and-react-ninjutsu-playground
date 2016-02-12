var $ = require('jquery');

//import React from 'react';

var _BaseStoreApi = {

  API_PATH_PREFIX: '/api/v1',

  getResources: function() {
    return this._ajax(
      this.resourceName
    );
  },

  getResource: function(id) {
    return this._ajax(
      this.resourceName + '/' + id
    );
  },

  createResource: function(resource) {
    return this._ajax(
      this.resourceName + '/',
      'POST',
      JSON.stringify(resource)
    );
  },

  updateResource: function(resource) {
    return this._ajax(
      this.resourceName + '/' + resource.id,
      'PUT',
      JSON.stringify(resource)
    );
  },

  destroyResource: function(resource) {
    return this._ajax(
      this.resourceName + '/' + resource.id,
      'DELETE'
    );
  },

  _ajax: function(url, verb, data) {
    try {
        var csrf_token = document.querySelector('meta[name=csrf-token]').attributes['content'].value;
    }
    catch(err) {
        var csrf_token = '';
    }
    return $.ajax({
      url:          this.API_PATH_PREFIX + '/' + url,
      type:         verb || 'GET',
      contentType:  'application/json',
      dataType:     'json',
      processData:  false,
      data:         data,
      headers: {
        'X-CSRF-Token': csrf_token
      }
    });
  }

};

export default _BaseStoreApi;
