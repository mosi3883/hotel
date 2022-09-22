import './Hotel.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { useCallback } from 'react';

const Hotel = ({ id }) => {
  const navigate = useNavigate();
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(true);

  if (!id || !Number.isFinite(+id)) {
    navigate('/hotels');
  }

  const fetchHotel = useCallback(async () => {
    try {
      const res = await fetch('https://portfoliorecovery.me/wp-json/wp/v2/posts/' + id);
      const data = await res.json();

      setHtml(data.content.rendered);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);
  useEffect(() => {
    fetchHotel();
  }, [fetchHotel]);
  if (loading) {
    return <ReactLoading className='loading' type='bars' />;
  }

  return (
    <div className='container'>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>;
      <div className='text-center'>
        <Link to={`/reserve-now?id=${id}`} className='main-btn'>
          Book now
        </Link>
      </div>
    </div>
  );
};

export default Hotel;
