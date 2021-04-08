import React from 'react';
import PropTypes from 'prop-types';
import { gameWidth } from '../utils/constants';

const StartGame = (props) => {
  const button = {
    x: gameWidth / -2,
    y: -280,
    width: gameWidth,
    height: 200,
    rx: 10,
    ry: 10,
    style: {
      fill: 'transparent',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };


  return (
  );
};

StartGame.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default StartGame;
