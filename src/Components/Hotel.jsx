import homeImg1 from './hotels/gal-10.jpg';
import './Hotel.scss';
import { useEffect } from 'react';
import { useState } from 'react';

const Hotel = ({ id }) => {
  const [html, setHtml] = useState('');
  const p = '<p>sadasdda</p>';
  console.log(html.c);
  console.log(id);
  const fetchHotel = async () => {
    try {
      const res = await fetch('https://portfoliorecovery.me/wp-json/wp/v2/posts');
      const data = await res.json();
      setHtml(data[id - 1].content.rendered);
    } catch (err) {}
  };
  useEffect(() => {
    fetchHotel();
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
  // return (
  //   <div className='home'>
  //     <h1 className='heading-primary'>hotel name</h1>
  //     <div className='hotel-hero'>
  //       <div className='hotel-image-box'>
  //         <img src={homeImg1} alt='hotel' className='hotel-img' />
  //       </div>
  //       <div className='hotel-intro-box'>
  //         <h4 className='heading-4'>hotel name</h4>
  //         <p className='hotel-price-box'>
  //           <b>price: </b> 850$
  //         </p>
  //         <p className='hotel-location-box'>
  //           <b>Location: </b> Holand
  //         </p>
  //       </div>
  //     </div>
  //     <div className='hotel-description'>
  //       <h2 className='heading-tertiary'>Description</h2>
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam enim et quasi
  //         pariatur aliquid dolorem quos dignissimos. Itaque, mollitia numquam? Tenetur
  //         temporibus sapiente optio magni itaque minima sunt nihil?
  //       </p>
  //       <p>
  //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium unde sit
  //         voluptatum consequatur doloribus blanditiis cupiditate nam, omnis perspiciatis ipsa
  //         debitis hic repellendus excepturi aliquid cum ab sed saepe ad.
  //       </p>
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni in temporibus ducimus
  //         mollitia soluta corporis impedit, eligendi, minima sequi voluptatem ipsam doloribus,
  //         facere reprehenderit. Iusto veritatis soluta cupiditate. Accusantium, vero!
  //       </p>
  //       <div className='text-center '>
  //         <button className='main-btn'>Book now</button>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Hotel;
