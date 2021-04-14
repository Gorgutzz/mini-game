import {
  createInterval, flyingObjectsStarterYAxis, maxFlyingObjects,
  flyingObjectsStarterPositions
} from '../utils/constants';

export default (state) => {
  if ( ! state.gameState.started) return state;

  const now = (new Date()).getTime();
  const { lastObjectCreatedAt, flyingObjects } = state.gameState;
  );

  if ( ! createNewObject) return state;

  };

  return {
    ...state,
    gameState: {
    }
  }
}
