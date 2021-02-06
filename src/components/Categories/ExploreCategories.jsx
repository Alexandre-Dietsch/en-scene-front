import React, { Fragment } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { useHistory } from 'react-router-dom';
import MobileMenu from '../Menu/MobileMenu';
import Loader from '../Loader/Loader';

export default function ExploreCategories() {
  const history = useHistory();
  const url = `http://localhost:5000/api/categories`;
  const [data, loading] = useFetchData(url);

  return(
    <Fragment>
      { loading && <Loader /> }
      <div className="explore-categories-container">
        <div className="explore-categories-header">
          <h1>Explore</h1>
        </div>
        <div className="explore-categories-card">
          {
            data && 
            data.map(category => (
              <div className="category-card" key={category.id} onClick={() => history.push(`/categories/${category.id}`)}>
                <img src={category.thematic_image} alt={category.name} />
                <h2>{category.name}</h2>
                </div>
            ))
          }
        </div>
        <MobileMenu />
      </div>
    </Fragment>
  );
} 