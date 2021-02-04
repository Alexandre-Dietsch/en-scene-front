import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import MobileMenu from '../Menu/MobileMenu';

export default function ArtistsByCategory() {
  const [category, setCategory] = useState([]);
  const idcategory = useParams();
  const history = useHistory();
  
  useEffect(() => {
    const accessCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/category/${idcategory.idcategory}`);
        setCategory(response.data);

      } catch(error) {
        console.log(error.message);
      }
    }
    accessCategory();
  }, [idcategory]);

  return(
    <div className="artists-category-container">
      <div className="artists-category-header">
        <h1>Musique</h1>
      </div>
      <div className="artists-category-cards-container">
        {
          category && 
          category.map(artist => (
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
  );
};