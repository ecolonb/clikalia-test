import { types } from '../types';

const initialState = {
  isLoading: false,
  messageLoading: 'Loading...'
};

export const uiReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.uiSetLoading:
      return {
        ...state,
        isLoading: true
      };
    case types.uiUnSetLoading:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
