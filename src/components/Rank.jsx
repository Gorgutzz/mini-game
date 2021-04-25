import React from 'react';
import PropTypes from 'prop-types';

const Rank = (props) => {
  const { x, y } = props.position;

  const rectId = 'rect' + props.player.rank;
  const clipId = 'clip' + props.player.rank;

  const pictureStyle = {
    height: 60,
    width: 60,
  };

  const textStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 35,
    fill: '#e3e3e3',
    cursor: 'default',
  };

  if (props.player.currentPlayer) textStyle.fill = '#e9ea64';

  const pictureProperties = {
    style: pictureStyle,
    x: x - 140,
    y: y - 40,
    href: props.player.picture,
    clipPath: `url(#${clipId})`,
  };

  const frameProperties = {
    width: 55,
    height: 55,
    rx: 30,
    x: pictureProperties.x,
    y: pictureProperties.y,
  };

  return (
  );
};


export default Rank;
