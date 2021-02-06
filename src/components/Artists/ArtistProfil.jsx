import React, { Fragment } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { Link, useParams } from 'react-router-dom';
import MobileMenu from '../Menu/MobileMenu';
import Loader from '../Loader/Loader';

export default function ArtistProfil() {
  const { idartist } = useParams();
  const url = `http://localhost:5000/api/user/${idartist}`;
  const [data, loading] = useFetchData(url);

  return(
    <Fragment>
      { loading && <Loader /> }
      <div className="artist-container">
        {
          data && 
          data.map(artist => (
            <div className="artist-profil" key={artist.id}>
              <Link to='/categories/8'>
                <i className="fas fa-arrow-left" />
              </Link>
              <img src={artist.user_picture} alt='' />
              <div className="artist-biography">
                <p>{artist.biography}</p>
                <Link to={`/albums/${artist.id}`}>
                  <span>
                    Découvrir {artist.pseudo}
                  </span>
                </Link>
              </div>
            </div>
          ))
        }

      <MobileMenu />
      </div>
    </Fragment>
  );
};