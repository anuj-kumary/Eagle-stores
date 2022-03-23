import { Link } from 'react-router-dom';
import './Carousel.css';

export const Carousel = () => {
  return (
    <>
      <section id='carousel'>
        <div className='carousel__overlay carousel__slider'>
          <div className='carousel__content'>
            <h1 className='carousel__heading'>Welcome to EagleStore</h1>
            <h3 className='carousel__subheading'>For all your gadgets</h3>
            <Link to='/product' className='btn btn__default'>
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
