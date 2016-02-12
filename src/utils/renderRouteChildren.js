

// NOT USED!!!

import React from 'react';
import { omit } from 'lodash';

export default function renderRouteChildren(props) {
  const { children } = props;
  return children && React.cloneElement(children, omit(props, 'children'));
}
