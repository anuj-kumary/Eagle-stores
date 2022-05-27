import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth, useData } from '../../context';
import { PostCartItems } from '../../services/Services';
import { ACTION_TYPE } from '../../utils/actionType';
import { ToastHandler } from '../../utils/filterFunction';
import '../ProductDetails/ProductDetails.css';

export const ProductDetails = () => {
  const { productId } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useState(false);
  const { dispatch } = useData();
  const {
    state: { products, cartlist },
  } = useData();

  const cartHandler = async (e) => {
    try {
      if (!token) {
        navigate('/login');
        return;
      }

      if (e.target.innerText === 'Go To Cart') {
        navigate('/cart');
        return;
      }

      const response = await PostCartItems({
        product: { ...product, qty: 1 },
        encodedToken: token,
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: ACTION_TYPE.SETCART_LIST,
          payload: { cartlist: response.data.cart },
        });
        ToastHandler('success', 'Product Added To Cart');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const cartfindItem = cartlist.find((ele) => ele._id === _id);
    if (cartfindItem) {
      setCart(true);
    } else {
      setCart(false);
    }
  }, [cartlist]);

  const product = products.find((product) => product._id === productId);
  const { _id, name, img, originalPrice, brand, rating, out_of_stock } =
    product || {};
  console.log(out_of_stock);

  return (
    <>
      {_id && (
        <div className='cart'>
          <div className='cart__horizontal product__cart'>
            <div className='cart__image'>
              <img className='product__img' src={img} alt={name} />
            </div>
            <div className='cart__content'>
              <h3 className='product_heading'>{name}</h3>
              <div className='cart__price'>&#8377; {originalPrice}</div>
              <hr />
              <p className='cart__brand'>
                <span className='cart__brand--name fs__3'>Brand:</span>
                <span className='fs__2'>{brand}</span>
              </p>
              <h4 className='cart__desc fs__6 fw__700'>Description:</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia culpa voluptates dolores illo assumenda ullam ipsam,
                omnis in explicabo voluptas dolore dolor beatae eius eos.
                Exercitationem cupiditate optio illo eveniet.
              </p>
              <div className='product__button btn__detaills'>
                <button
                  disabled={out_of_stock}
                  onClick={(e) => cartHandler(e)}
                  className={`carts__btn ${
                    cart ? 'btn btn__success' : 'btn btn__primary'
                  }`}
                >
                  {cart ? 'Go To Cart' : 'Add To Cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
