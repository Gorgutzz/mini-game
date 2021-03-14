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
      x={backgroundWidth / -2}
      y={100 - gameHeight}
      width={backgroundWidth}
      height={gameHeight}
    />
  );
};

export default Background;
