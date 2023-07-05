import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchQuery } from '../redux/slice/meals/mealsSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    dispatch(searchQuery(value));
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search meals.."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>

  );
};

export default SearchBox;
