import { types } from '../types';

const initialState = {
  pokemonList: [],
  activePokemon: null,
  searchFor: 'name',
  searchValue: '',
  inSearch: false
};

export const pokemonsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.pokemonAdd:
      return {
        ...state,
        pokemonList: [...state.pokemonList, action.payload]
      };
    case types.pokemonSetActive:
      return {
        ...state,
        activePokemon: action.payload
      };
    case types.pokemonSetSearchFor:
      return {
        ...state,
        searchFor: action.payload
      };
    case types.pokemonSetSearchValue:
      return {
        ...state,
        searchValue: action.payload
      };
    case types.pokemonSetInSearch:
      return {
        ...state,
        inSearch: action.payload
      };
    default:
      return state;
  }
};
