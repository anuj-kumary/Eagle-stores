import { useNavigate } from 'react-router-dom';
import './HomeCategory.css';

export const HomeCategory = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='category__container'>
        <h2 className='text__center category__heading'>Popular Categories</h2>
        <main className='product'>
          <div onClick={() => navigate('/product')} className='product__cards '>
            <div className='product__card category__card'>
              <div className='product__image'>
                <img
                  src='https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606585925/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9009478991902.png/mxw_1440,f_auto'
                  alt='Laptop'
                />
              </div>
              <div>
                <h3 className='category__name'>Laptop</h3>
              </div>
            </div>

            <div
              onClick={() => navigate('/product')}
              className='product__card category__card'
            >
              <div className='product__image'>
                <img
                  src='https://images-eu.ssl-images-amazon.com/images/I/41R9oD3K25L._SX300_SY300_QL70_FMwebp_.jpg'
                  alt='Phone'
                />
              </div>
              <div>
                <h3 className='category__name'>Phone</h3>
              </div>
            </div>

            <div
              onClick={() => navigate('/product')}
              className='product__card category__card'
            >
              <div className='product__image'>
                <img
                  src='https://vlebazaar.in/image/cache/catalog//B08CVP7LCC/OnePlus-Buds-Gray-B08CVP7LCC-550x550h.jpg'
                  alt='Earbuds'
                />
              </div>
              <div>
                <h3 className='category__name'>Earbuds</h3>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
