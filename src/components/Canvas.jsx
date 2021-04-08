import React from 'react';
import PropTypes from 'prop-types';
import Background from './Background';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonShaft from './CannonShaft';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import Ufo from './Ufo';
import Life from './Life';

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="mini-game-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Background />
      <Ground />
      <CannonShaft rotation={props.angle} />
      <CannonBase />
      <CannonBall position={{x: 0, y: -100}}/>
      <CurrentScore score={15} />
      <Ufo position={{x: -150, y: -300}}/>
      <Ufo position={{x: 150, y: -300}}/>
      <Life position={{x: -300, y: 35}} />
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
