import React from 'react';
import PropTypes from 'prop-types';

import useScrolledToEdge from './hook/Scroll';

const ScrolledToEdge = props => {
  const container = useScrolledToEdge(props.onChange, props.offset);
  const firstChild = React.Children.toArray(props.children)[0];
  if (!firstChild) return null;
  
  return React.cloneElement(firstChild, {
    ref: container
  });
  
};

ScrolledToEdge.propTypes = {
  offset: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default ScrolledToEdge;
