import React from 'react';
import PropTypes from 'prop-types';
import Background from './Background';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonShaft from './CannonShaft';

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="mini-game-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <Background />
      <Ground />
      <CannonShaft rotation={props.angle} />
      <CannonBase />
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
