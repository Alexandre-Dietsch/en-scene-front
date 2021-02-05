import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import MobileMenu from '../Menu/MobileMenu';

export default function AlbumsContainer() {
  const [albums, setAlbums] = useState([]);
  const { idartist } = useParams();
  
  useEffect(() => {
    const getAlbumsByArtist = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/albums/${idartist}`);
        setAlbums(response.data);
      } catch(error) {
        console.log('getAlbumByArtist: ', error)
      }
    }
    getAlbumsByArtist();
  }, [idartist]);

  return(
    <div className="albums-container">
      <h2>{albums.name}</h2>
      {
        albums.map(album => (
          <div className="album-card" key={album.id}>
            <img src={album.album_picture} alt='album of the artist' />
            <h2>{album.name}</h2>
          </div>
        ))
      }
      <MobileMenu />
    </div>
  );
}