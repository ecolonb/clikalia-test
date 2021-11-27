import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokemonCard from './PokemonCard';
import Pagination from './pagination/Pagination';
import {
  pokemonAdd,
  pokemonSetActive,
  pokemonDeleteAll
} from 'redux/actions/pokemons';
import { uiSetloading, uiUnSetloading } from 'redux/actions/ui';
import { getAllPokemons, getSinglePokemon } from 'services/pokemons';
import './styles.scss';

export default function PokemonList({ className }) {
  const dispatch = useDispatch();
  const { pokemonList, currentPage } = useSelector((state) => state.pokemons);
  const { isLoading } = useSelector((state) => state.ui);
  const [allPokemons, setAllPokemons] = useState([]);
  const [whenMounted, setWhenMounted] = useState(true);

  const getAll = async (page) => {
    try {
      dispatch(uiSetloading());
      const data = await getAllPokemons(page);
      setAllPokemons(data.results);
    } catch (error) {
      console.error('error: ', error);
      dispatch(uiUnSetloading());
    }
  };

  useEffect(() => {
    if (whenMounted) {
      getAll(1);
      setTimeout(() => setWhenMounted(false), 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      dispatch(pokemonDeleteAll());
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

  useEffect(() => {
    if (!whenMounted) getAll(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handleClick = (activePokemon) =>
    dispatch(pokemonSetActive(activePokemon));

  return (
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
      {!isLoading && <Pagination />}
    </div>
  );
}
