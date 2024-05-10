import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filterSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const searchId = useId();

  const handleFilter = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId}>
        Find contacts by name: <span className={css.labelSpan}>{filter}</span>
      </label>
      <input
        className={css.searchField}
        type="text"
        value={filter}
        onChange={handleFilter}
        id={searchId}
      />
    </div>
  );
};

export default SearchBox;
