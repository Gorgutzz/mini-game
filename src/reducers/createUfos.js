import {
  createInterval, ufosStarterYAxis, maxufos,
  ufosStarterPositions
} from '../utils/constants';

export default (state) => {
  if ( ! state.gameState.started) return state;

  const now = (new Date()).getTime();
  const { lastObjectCreatedAt, ufos } = state.gameState;
  const createNewObject = (
    now - (lastObjectCreatedAt).getTime() > createInterval &&
    ufos.length < maxufos
  );

  if ( ! createNewObject) return state;

  const id = (new Date()).getTime();
  const predefinedPosition = Math.floor(Math.random() * maxufos);
  const ufoPosition = ufosStarterPositions[predefinedPosition];
  const newUfo = {
    position: {
      x: ufoPosition,
      y: ufosStarterYAxis,
    },
    createdAt: (new Date()).getTime(),
    id,
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      ufos: [
        ...state.gameState.ufos,
        newUfo
      ],
      lastObjectCreatedAt: new Date(),
    }
  }
}
