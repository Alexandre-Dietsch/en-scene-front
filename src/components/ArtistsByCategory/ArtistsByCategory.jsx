import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import MobileMenu from '../Menu/MobileMenu';

export default function ArtistsByCategory() {
  const [category, setCategory] = useState([]);
  const idcategory = useParams();

  useEffect(() => {
    const accessCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/category/${idcategory}`);
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
        <h1>Ma catégorie</h1>
      </div>
      <div className="artists-category-cards-container">
        {
          category && 
          category.map(theme => (
            <div className="artists-category-card" key={theme.id}>
              <img src={theme.thematic_image} alt={theme.name} />
              <h2>{theme.name}</h2>
              </div>
          ))
        }
      </div>
      <MobileMenu />
    </div>
  );
};