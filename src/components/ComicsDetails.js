import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getGenreDetails } from '../redux/comicsDetails/comicsDetailsSlice';

const ComicsDetails = () => {
  const { id } = useParams();
  const { details, isLoading, errorMessage } = useSelector((state) => state.comicsDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenreDetails(id));
  }, []);

  return (
    <section className="genre-details-section">
      <div className="genre-topic">
        <p>
          {details.length}
          {' '}
          categories
        </p>
      </div>
      <span className="anime-filter">
        comics
      </span>
      {isLoading && <h2 style={{ color: '#fff', margin: 'auto' }}>Loading...</h2>}
      {errorMessage && <h2 style={{ color: '#fff', margin: 'auto' }}>{errorMessage}</h2>}
      <div className="card-container">
        {details.map((anime) => (
          <div className="anime-card" key={anime.mal_id}>
            <img src={anime.images.jpg.image_url} alt={anime.name} />
            <div className="anime-info">
              <h3>{anime.title}</h3>
              <p>
                {anime.favorites}
                {' '}
                <FontAwesomeIcon icon={faHeart} style={{ color: '#539749' }} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComicsDetails;
