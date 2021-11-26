import { useEffect, useState } from 'react';
import { getAllPokemons, getSinglePokemon } from 'services/pokemons';
import PokemonCard from './PokemonCard';
import './styles.scss';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const getAll = async () => {
    try {
      const data = await getAllPokemons();
      setAllPokemons(data.results);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const getPokemon = async (name) => {
    const pokemon = await getSinglePokemon(name);
    setPokemonList((currentState) => [...currentState, pokemon]);
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    allPokemons.forEach((pokemon) => getPokemon(pokemon.name));
  }, [allPokemons]);

  return (
    <div className='pokemon-wrapper'>
      <h1>Pokemon Evolution</h1>
      <div className='pokemon-container'>
        <div className='all-pokemons'>
          {pokemonList.map((pokemon, index) => (
            <PokemonCard
              key={index}
              id={pokemon.id}
              image={pokemon.sprites.other.dream_world.front_default}
              name={pokemon.name}
              type={pokemon.types[0].type.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
