import React, { Fragment } from 'react';
import pictures from './loginPictures';

export default function ListOfPictures() {
  return (
    <Fragment>
      {
        pictures.map(picture => (
          <img 
          key={picture.id} 
          src={picture.image} 
          alt='' 
          className={picture.cName} 
          />
        ))
      }
    </Fragment>
  );
}