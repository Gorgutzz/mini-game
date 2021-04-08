import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formulas';

const Life = (props) => {
  const HeartStyle = {
    fill: '#da0d15',
    stroke: '#a51708',
    strokeWidth: '2px',
  };

  const leftSide = {
    initialAxis: {
      x: props.position.x,
      y: props.position.y,
    },
    initialControlPoint: {
      x: -20,
      y: -20,
    },
    endingControlPoint: {
      x: -40,
      y: 10,
    },
    endingAxis: {
      x: 0,
      y: 40,
    },
  };

  const rightSide = {
    initialAxis: {
      x: props.position.x,
      y: props.position.y,
    },
    initialControlPoint: {
      x: 20,
      y: -20,
    },
    endingControlPoint: {
      x: 40,
      y: 10,
    },
    endingAxis: {
      x: 0,
      y: 40,
    },
  };

  return (
    <g filter="url(#shadow)">
      <path
        style={HeartStyle}
        d={pathFromBezierCurve(leftSide)}
      />
      <path
        style={HeartStyle}
        d={pathFromBezierCurve(rightSide)}
      />
    </g>
  );
};

Life.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default Life;
