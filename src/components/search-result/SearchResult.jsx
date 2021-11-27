import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokemonCard from 'components/pokemons/PokemonCard';
import { pokemonSetActive } from 'redux/actions/pokemons';
import { uiSetloading, uiUnSetloading } from 'redux/actions/ui';
import { searchByAbility, getSinglePokemon } from 'services/pokemons';

export default function SearchResult({ className }) {
  const dispatch = useDispatch();
  const { searchValue, searchFor, inSearch } = useSelector(
    (state) => state.pokemons
  );

  const [pokemonList, setPokemonList] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        dispatch(uiSetloading());
        switch (searchFor) {
          case 'name':
            const result = await getSinglePokemon(searchValue);
            setPokemonList(result?.ok ? [result] : []);
            break;
          case 'ability':
            const resultAbilities = await searchByAbility(searchValue);
            setAllPokemons(resultAbilities?.pokemon || []);
            break;

          default:
            break;
        }
        dispatch(uiUnSetloading());
      } catch (error) {
        console.error(error);
      }
    };
    getPokemonList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inSearch, searchFor]);

  useEffect(() => {
    setPokemonList([]);
    const getPokemons = async () => {
      const getPokemon = async (name) => {
        dispatch(uiSetloading());
        const data = await getSinglePokemon(name);
        setPokemonList((currentState) => [...currentState, data]);
        dispatch(uiUnSetloading());
      };

      for (const { pokemon } of allPokemons) {
        await getPokemon(pokemon.name);
      }
    };
    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPokemons]);

  const handleClick = (activePokemon) =>
    dispatch(pokemonSetActive(activePokemon));

  return pokemonList.length > 0 ? (
    <div className={'pokemon-wrapper ' + className}>
      <h1>Pokemons List</h1>
      <div className='pokemon-container'>
        <div className='all-pokemons'>
          {pokemonList.map((pokemon, index) => (
            <PokemonCard
              key={index}
              pokemon={pokemon}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <p className={'align-center bold ' + className}>0 Results</p>
  );
}
