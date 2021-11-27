import { types } from '../types';

export const uiSetloading = (e) => ({
  type: types.uiSetLoading,
  payload: true
});

export const uiUnSetloading = (e) => ({
  type: types.uiUnSetLoading,
  payload: false
});
