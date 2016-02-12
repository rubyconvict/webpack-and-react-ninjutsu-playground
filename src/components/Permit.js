import React from 'react';

require('../policies/posts/PostPolicy');

class PermitComponent extends React.Component {
  render() {
    if (window[this.props.policy].permit(this.props.action, this.props.record)) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

PermitComponent.displayName = 'PermitComponent';

// Uncomment properties you need
// PermitComponent.propTypes = {};
// PermitComponent.defaultProps = {};

export default PermitComponent;
