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

  return (
  );
};


export default Rank;
