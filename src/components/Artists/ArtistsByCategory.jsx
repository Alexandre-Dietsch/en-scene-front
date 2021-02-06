import React, { Fragment } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { useParams, useHistory } from 'react-router-dom';
import MobileMenu from '../Menu/MobileMenu';
import Loader from '../Loader/Loader';

export default function ArtistsByCategory() {
  const idcategory = useParams();
  const history = useHistory();
  const url = `http://localhost:5000/api/category/${idcategory.idcategory}`;
  const [data, loading] = useFetchData(url);

  return(
    <Fragment>
      { loading && <Loader /> }  
      <div className="artists-category-container">
        <div className="artists-category-header">
          <h1>Musique</h1>
        </div>
        <div className="artists-category-cards-container">
          {
            data && 
            data.map(artist => (
              <div className="artists-category-card" key={artist.id} 
              onClick={() => history.push(`/artist/${artist.id}`)}
              >
                <img src={artist.user_picture} alt='profil artist' />
                <h2>{artist.pseudo}</h2>
                </div>
            ))
          }
        </div>
        <MobileMenu />
      </div>
    </Fragment>
  );
};