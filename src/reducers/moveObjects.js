import { calculateAngle } from '../utils/formulas';
import createUfos from './createUfos';

function moveObjects(state, action) {
  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0,
  };

  const newState = createUfos(state);

  const now = (new Date()).getTime();
  const ufos = newState.gameState.ufos.filter(object => (
    (now - object.createdAt) < 4000
  ));

  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);
  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      ufos,
    },
    angle,
  };
}

export default moveObjects;
