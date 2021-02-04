import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import MobileMenu from '../Menu/MobileMenu';

export default function ExploreCategories() {
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/categories`);
        setCategories(response.data);

      } catch(error) {
        console.log(error.message);
      }
    }
    getAllCategories();
  }, []);

  return(
    <div className="explore-categories-container">
      <div className="explore-categories-header">
        <h1>Explore</h1>
      </div>
      <div className="explore-categories-card">
        {
          categories && 
          categories.map(category => (
            <div className="category-card" key={category.id} onClick={() => history.push(`/categories/${category.id}`)}>
              <img src={category.thematic_image} alt={category.name} />
              <h2>{category.name}</h2>
              </div>
          ))
        }
      </div>
      <MobileMenu />
    </div>
  );
} 