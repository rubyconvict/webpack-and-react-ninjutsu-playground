/*
 * Policy object, returning a single `permit` action
 *
 * @param action [String]
 * @param record [Object]
 *
 * @example
 *   if (PostPolicy.permit('update', record)) { ... }
 *
 * @return [Boolean]
 */
var PostPolicy = (function(currentUser, undefined) {

  var _policies = {
    update: function(record) {
      return currentUser.id === record.user_id;
    },
    destroy: function(record) {
      return this.update(record) || currentUser.role === 'admin';
    }
  };

  var permit = function(action, record) {
    //return _policies[action](record);
    // FIXME!!!
    return true;
  }

  return {
    permit: permit
  };

})(window.currentUser)

window.PostPolicy = PostPolicy;
