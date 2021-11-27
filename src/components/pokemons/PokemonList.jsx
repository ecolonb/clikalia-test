import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokemonCard from './PokemonCard';
import { pokemonAdd, pokemonSetActive } from 'redux/actions/pokemons';
import { uiSetloading, uiUnSetloading } from 'redux/actions/ui';
import { getAllPokemons, getSinglePokemon } from 'services/pokemons';
import './styles.scss';

export default function PokemonList() {
  const dispatch = useDispatch();
  const { pokemonList } = useSelector((state) => state.pokemons);
  const [allPokemons, setAllPokemons] = useState([]);

  const getAll = async () => {
    try {
      dispatch(uiSetloading());
      const data = await getAllPokemons();
      setAllPokemons(data.results);
    } catch (error) {
      console.error('error: ', error);
      dispatch(uiUnSetloading());
    }
  };

  useEffect(() => {
    if (pokemonList.length === 0) getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      const getPokemons = async () => {
        const getPokemon = async (name) => {
          dispatch(uiSetloading());
          const pokemon = await getSinglePokemon(name);
          dispatch(pokemonAdd(pokemon));
          dispatch(uiUnSetloading());
        };

        for (const pokemon of allPokemons) {
          await getPokemon(pokemon.name);
        }
      };
      getPokemons();
    } catch (error) {
      dispatch(uiUnSetloading());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPokemons]);
  const handleClick = (activePokemon) =>
    dispatch(pokemonSetActive(activePokemon));

  return (
    <div className='pokemon-wrapper'>
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
  );
}
