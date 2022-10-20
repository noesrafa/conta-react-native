import {GraphState} from './GraphContext';

type GraphAction = {type: 'dataLoaded'} | {type: 'uploadData'; payload: any};

// Genera estado
export const graphReducer = (
  state: GraphState,
  action: GraphAction,
): GraphState => {
  switch (action.type) {
    case 'dataLoaded':
      return {
        ...state,
        isLoaded: true,
        data: null,
      };
    case 'uploadData':
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
