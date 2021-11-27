import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  pokemonSetSearchFor,
  pokemonSetSearchValue,
  pokemonSetInSearch
} from 'redux/actions/pokemons';

import './styles.scss';
export default function SearchBox() {
  const dispatch = useDispatch();
  const { searchFor, searchValue } = useSelector((state) => state.pokemons);
  const onValueChange = (event) => {
    const value = event.target.value;
    dispatch(pokemonSetSearchFor(value));
  };
  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(pokemonSetSearchValue(value));
    dispatch(pokemonSetInSearch(false));
  };

  const handleSearch = () => {
    dispatch(pokemonSetInSearch(true));
  };
  return (
    <div className='container'>
      <section className='search-box'>
        <input
          type='text'
          className='search-input'
          value={searchValue}
          onChange={handleChange}
          placeholder='Search..'
        />

        <button className='search-button' onClick={handleSearch}>
          <FaSearch />
        </button>
      </section>
      <section className='radio-container'>
        <div>
          <input
            type='radio'
            name='radio-group'
            value='name'
            id='name'
            checked={searchFor === 'name'}
            onChange={onValueChange}
          />
          <label htmlFor='name'>Name or Id</label>
        </div>
        <div>
          <input
            type='radio'
            name='radio-group'
            value='ability'
            id='ability'
            checked={searchFor === 'ability'}
            onChange={onValueChange}
          />
          <label htmlFor='ability'>Ability</label>
        </div>
      </section>
    </div>
  );
}
