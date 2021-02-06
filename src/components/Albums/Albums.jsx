import React, { Fragment } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { useParams } from 'react-router-dom';
import MobileMenu from '../Menu/MobileMenu';
import Loader from '../Loader/Loader';

export default function Albums() {
  const { idartist } = useParams();
  const url = `http://localhost:5000/api/albums/${idartist}`;
  const [data, loading] = useFetchData(url);

  return(
    <Fragment>
      { loading && <Loader /> }
      <div className="albums-container">
        <h2>{data.name}</h2>
        {
          data &&
          data.map(album => (
            <div className="album-card" key={album.id}>
              <img src={album.album_picture} alt='album of the artist' />
              <h2>{album.name}</h2>
            </div>
          ))
        }
        <MobileMenu />
      </div>
    </Fragment>
  );
}