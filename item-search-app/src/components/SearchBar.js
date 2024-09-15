import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/itemsSlice';
import './SearchBar.css';


const SearchBar = () => {
  const dispatch = useDispatch();
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  const handleSearchChange = useCallback((event) => {
    const { value } = event.target;
    setLocalSearchTerm(value);
    dispatch(setSearchTerm(value));
  }, [dispatch]);

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search by title"
        value={localSearchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
  </div>
  );
};

export default React.memo(SearchBar);
