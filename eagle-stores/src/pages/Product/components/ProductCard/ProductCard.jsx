import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../../../context';
import { PostCartItems, PostWishItems } from '../../../../services/Services';
import { ACTION_TYPE } from '../../../../utils/actionType';
import {
  categoryFilter,
  ratingFilter,
  sortByPrice,
  priceRangeFilter,
  searchFilter,
} from '../../../../utils/filterFunction';
import './ProductCard.css';

export const ProductCard = ({ state }) => {
  let newData = categoryFilter(state.products, state.filter.categories);
  newData = ratingFilter(newData, state.filter.rating);
  newData = sortByPrice(newData, state.filter.sortBy);
  newData = priceRangeFilter(newData, state.filter.priceRange);
  newData = searchFilter(newData, state.filter.search);

  const { token } = useAuth();
  const { dispatch } = useData();
  const navigate = useNavigate();

  return (
    <div className='product__cards'>
      {newData.map((item) => {
        const { _id, img, name, price } = item;

        const wishListHandler = async () => {
          {
            try {
              if (!token) {
                navigate('/login');
                return;
              }

              const response = await PostWishItems({
                product: item,
                encodedToken: token,
              });
              if (response === 200 || response === 201) {
                dispatch({
                  type: ACTION_TYPE.WISHLIST,
                  payload: { wishlist: response.data.wishlist },
                });
              }
              console.log(response);
            } catch (err) {
              console.log(err);
            }
          }
        };

        const cartHandler = async () => {
          try {
            if (!token) {
              navigate('/login');
              return;
            }

            const response = await PostCartItems({
              product: { ...item, qty: 1 },
              encodedToken: token,
            });
            if (response.status === 200 || response.status === 201) {
              dispatch({
                type: ACTION_TYPE.SETCART_LIST,
                payload: { cartlist: response.data.cart },
              });
            }
          } catch (err) {
            console.log(err);
          }
        };

        return (
          <div key={_id}>
            <div className='product__card'>
              <div className='product__image'>
                <img src={img} alt={name} />
                <button
                  onClick={wishListHandler}
                  className='product__favourite'
                >
                  <i className='fas fa-heart'></i>
                </button>
              </div>
              <h3 className='product__heading'>{name}</h3>
              <div className='product__price'>&#8377; {price}</div>
              <div className='product__button'>
                <button onClick={cartHandler} className='btn btn__primary'>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
