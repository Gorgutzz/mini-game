import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formulas';

const Heart = (props) => {
  const heartStyle = {
    fill: '#da0d15',
    stroke: '#a51708',
    strokeWidth: '2px',
  };

  return (
    <g filter="url(#shadow)">
      <path
        style={heartStyle}
        d={pathFromBezierCurve(leftSide)}
      />
      <path
        style={heartStyle}
        d={pathFromBezierCurve(rightSide)}
      />
    </g>
  );
};

Heart.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default Heart;
