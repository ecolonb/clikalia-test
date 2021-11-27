import { types } from '../types';

const initialState = {
  pokemonList: [],
  activePokemon: null,
  searchFor: 'name',
  searchValue: '',
  inSearch: false,
  currentPage: 1
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
    case types.pokemonSetCurrentPage:
      return {
        ...state,
        currentPage: action.payload
      };
    case types.pokemonDeleteAll:
      return {
        ...state,
        pokemonList: []
      };
    default:
      return state;
  }
};
