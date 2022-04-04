import '../Checkout/Checkout.css';
import { Checkoutprice } from './CheckoutPrice';

export const Checkout = () => {
  return (
    <>
      <h1 className='text__center content__heading'>Checkout</h1>
      <div className='checkout__container'>
        <div className='card card--text'>
          <label>
            <input type='radio' name='radio' />
            <p className='address__name'>Anujkumar</p>
          </label>
          <p className='card__desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            fuga
          </p>
          <p className='card__desc'>Phone Number : 123456789</p>
        </div>
        <Checkoutprice />
      </div>
    </>
  );
};
