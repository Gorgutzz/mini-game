import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import UfoBase from './UfoBase';
import UfoTop from './UfoTop';
import { gameHeight } from '../utils/constants';

const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(${gameHeight}px);
  }
`;

const Move = styled.g`
  animation: ${moveVertically} 4s linear;
`;

const Ufo = props => (
  <Move>
    <UfoBase position={props.position} />
    <UfoTop position={props.position} />
  </Move>
);

Ufo.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default Ufo;
