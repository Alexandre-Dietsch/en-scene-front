import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ExploreCategories() {
  const [categories, setCategories] = useState([]);

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
            <div className="category-card" key={category.id}>
              <img src={category.thematic_image} alt={category.name} />
              <h2>{category.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
  );
} 