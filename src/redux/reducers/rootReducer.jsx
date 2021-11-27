import { combineReducers } from 'redux';

import { pokemonsReducer } from './pokemonsReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  ui: uiReducer
});
