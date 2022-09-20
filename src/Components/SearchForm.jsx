import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const searchHotels = async (text) => {
  if (text.trim() === '') {
    return [];
  }
  try {
    const res = await fetch(`https://portfoliorecovery.me/wp-json/wp/v2/posts?search=${text}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [complation, setComplation] = useState([]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    navigate(`/hotels?q=${searchText}`);
  };
  const searchChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await searchHotels(searchText);
      const newData = data
        .map((item, i) => {
          return {
            href: `/hotel/${item.id}`,
            name: item.title.rendered,
          };
        })
        .slice(0, 3);
      setComplation(newData);
    };

    fetchHotels();
    // setComplation([
    //   { href: '/hotel/25', name: 'hotel 25' },
    //   { href: '/hotel/28', name: 'hotel 28' },
    // ]);
  }, [searchText]);
  // const showAutoCompletaion = () => {};
  return (
    <form className='search-form' onSubmit={handleSearchSubmit}>
      <div className='autocomplete'>
        <input
          type='text'
          className='search-input'
          placeholder='Search ...'
          onChange={searchChangeHandler}
          value={searchText}
          autoFocus
        />

        <div className='autocomplete-items'>
          {complation.map((com) => (
            <Link to={com.href} className='autocomplete-link'>
              {com.name}
            </Link>
          ))}
        </div>
      </div>

      <button type='submit' className='search-submit-btn'>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
