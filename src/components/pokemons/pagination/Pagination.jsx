import { useDispatch, useSelector } from 'react-redux';
import { pokemonSetCurrentPage } from 'redux/actions/pokemons';
import { PaginationButton, PaginationWrapper } from './styled';

export default function Pagination() {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.pokemons);
  const handleClick = (page) => {
    dispatch(pokemonSetCurrentPage(page));
  };
  return (
    <PaginationWrapper>
      <PaginationButton
        className={currentPage === 1 && 'active'}
        onClick={() => handleClick(1)}
      >
        1
      </PaginationButton>
      <PaginationButton
        className={currentPage === 2 && 'active'}
        onClick={() => handleClick(2)}
      >
        2
      </PaginationButton>
      <PaginationButton
        className={currentPage === 3 && 'active'}
        onClick={() => handleClick(3)}
      >
        3
      </PaginationButton>
      <PaginationButton
        className={currentPage === 4 && 'active'}
        onClick={() => handleClick(4)}
      >
        4
      </PaginationButton>
      <PaginationButton
        className={currentPage === 5 && 'active'}
        onClick={() => handleClick(5)}
      >
        5
      </PaginationButton>
      <PaginationButton
        className={currentPage === 6 && 'active'}
        onClick={() => handleClick(6)}
      >
        6
      </PaginationButton>
      <PaginationButton
        className={currentPage === 7 && 'active'}
        onClick={() => handleClick(7)}
      >
        7
      </PaginationButton>
    </PaginationWrapper>
  );
}
