import React from 'react';
import PropTypes from 'prop-types';

const ContextView = ({children}) => {
  return <>{children}</>;
};

ContextView.propTypes = {
  children: PropTypes.node.isRequired,
};

ContextView.defaultProps = {};

export default ContextView;
