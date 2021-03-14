import React from 'react';
import Background from './Background';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonShaft from './CannonShaft';

const Canvas = () => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <Background />
      <Ground />
      <CannonShaft rotation={45} />
      <CannonBase />
    </svg>
  );
};

export default Canvas;
