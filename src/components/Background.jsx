import React from 'react';

const Background = () => {
};

export default Background;


import React from 'react';

const Background = () => {
  const backgroundStyle = {
    fill: '#30abef',
  };
  const backgroundWidth = 5000;
  const gameHeight = 1200;
  return (
    <rect
      style={backgroundStyle}
      x={skyWidth / -2}
      y={100 - gameHeight}
      width={backgroundWidth}
      height={gameHeight}
    />
  );
};

export default Background;
