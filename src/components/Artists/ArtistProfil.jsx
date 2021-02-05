import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import MobileMenu from '../Menu/MobileMenu';

export default function ArtistProfil() {
  const [artistProfil, setArtistProfil] = useState([]);
  const { idartist } = useParams();

  useEffect(() => {
    const fetchArtistProfil = async (req, res) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/user/${idartist}`);
        setArtistProfil(response.data);
      } catch(error) {
        console.log(error.message)
      }
    }
    fetchArtistProfil();
  }, [idartist])

  return(
    <div className="artist-container">
      {
        artistProfil && 
        artistProfil.map(artist => (
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
  );
};