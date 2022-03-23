import React from 'react';
import { Link } from 'react-router-dom';

export const Logout = () => {
  return (
    <>
      <main className='logout__container'>
        <section className='logout'>
          <div className='logout__content'>
            <h3 className='hero__heading'>You are logged out</h3>
            <p className='hero__sub__heading'>
              You are logges out. To see your account please log in.
            </p>
            <p className='hero__sub__heading'>
              Don't have an account? Signup to create one
            </p>

            <div className='logout__buttons'>
              <Link to='/login' className='btn btn__default'>
                Login
              </Link>
              <Link
                to='/signup'
                className='btn btn--outlined outlined__secondary'
              >
                Signup
              </Link>
            </div>
          </div>
          <div className='logout__images'>
            <img
              src='https://eaglestore.netlify.app/images/bg.png'
              alt='log out image'
            />
          </div>
        </section>
      </main>
    </>
  );
};
