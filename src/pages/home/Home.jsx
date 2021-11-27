import { useSelector } from 'react-redux';
import PokemonList from 'components/pokemons/PokemonList';
import SearchResult from 'components/search-result/SearchResult';
import Pokedex from 'components/pokemons/pokedex/Pokedex';
import Loading from 'components/loading/Loading';
import SearchBox from 'components/search-box/SearchBox';

import pokeImage from 'assets/images/pokeapi.png';
import './styles.scss';

export default function Home() {
  const { inSearch } = useSelector((state) => state.pokemons);
  return (
    <div className='page-wrapper'>
      <img className='poke-api-image' src={pokeImage} alt='pokeapi' />
      <SearchBox />
      <PokemonList className={inSearch ? 'display-none' : ''} />
      <SearchResult className={!inSearch ? 'display-none' : ''} />
      <Loading />
      <Pokedex />
    </div>
  );
}
