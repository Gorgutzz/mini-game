import React from 'react';
import PropTypes from 'prop-types';
import UfoBase from './UfoBase';
import UfoTop from './UfoTop';

const UFO = props => (
  <g>
    <UfoBase position={props.position} />
    <UfoTop position={props.position} />
  </g>
);

Ufo.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default Ufo;
