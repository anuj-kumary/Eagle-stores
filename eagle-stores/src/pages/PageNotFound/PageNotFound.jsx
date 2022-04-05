import React from 'react';
import './PageNotFound.css';

export const PageNotFound = () => {
  return (
    <>
      <div className='container'>
        <div className='container__left'>
          <img
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png'
            alt='Error Page'
          />
        </div>
        <div className='container__right'>
          <h3 className='heading text__center'>Awwww... Don't Cry</h3>
          <h5 className='sub__heading text__center'>It's just a 404 Error!</h5>
          <p className='title text__center'>
            We're sorry, the page you requested counld not be found. Please go
            back to the homepage.{' '}
          </p>
        </div>
      </div>
    </>
  );
};
