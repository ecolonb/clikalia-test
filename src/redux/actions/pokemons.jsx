import { types } from '../types';

export const pokemonAdd = (event) => ({
  type: types.pokemonAdd,
  payload: event
});

export const pokemonSetActive = (event) => ({
  type: types.pokemonSetActive,
  payload: event
});
export const pokemonSetSearchFor = (event) => ({
  type: types.pokemonSetSearchFor,
  payload: event
});
export const pokemonSetSearchValue = (event) => ({
  type: types.pokemonSetSearchValue,
  payload: event
});
export const pokemonSetInSearch = (event) => ({
  type: types.pokemonSetInSearch,
  payload: event
});
export const pokemonSetCurrentPage = (event) => ({
  type: types.pokemonSetCurrentPage,
  payload: event
});
export const pokemonDeleteAll = (event) => ({
  type: types.pokemonDeleteAll,
  payload: []
});
