import React, { Fragment } from 'react';
import pictures from './dataPictures';

export default function HomePictures() {
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