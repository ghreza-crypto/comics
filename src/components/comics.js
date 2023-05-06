import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getGenres } from '../redux/comics/comicsSlice';

const Comics = () => {
  const { comics, isLoading, errorMessage } = useSelector((state) => state.comics);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredGenres = comics.filter(
    (genre) => genre.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <section className="genres-section">
      <div className="anime-topic">
        <h2>Comics</h2>
        <p>
          (
          {filteredGenres.length}
          {' '}
          categories)
        </p>
      </div>
      <div className="search-bar-container">
        <input type="text" placeholder="Search" className="search-bar" value={searchText} onChange={handleSearch} />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <button type="button" className="anime-filter">
        Anime Genres
      </button>
      {isLoading && <h2 style={{ color: '#fff', margin: 'auto' }}>Loading...</h2>}
      {errorMessage && <h2 style={{ color: '#fff', margin: 'auto' }}>{errorMessage}</h2>}

      <div className="card-container">
        {filteredGenres.map((genre) => (
          <Link to={`/details/${genre.mal_id}`} key={genre.mal_id} className="genre-card">
            <div>
              <h3>{genre.name}</h3>
              <p>
                {genre.count}
                {' '}
                animes
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Comics;
