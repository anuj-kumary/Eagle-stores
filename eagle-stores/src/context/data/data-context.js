import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { ACTION_TYPE } from '../../utils/actionType';
import { initialistate, DataReducer } from '../../reducer';
import { GetCartItems } from '../../services/Services';
import { useAuth } from '../auth/auth-context';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { token } = useAuth();
  const [state, dispatch] = useReducer(DataReducer, initialistate);

  useEffect(() => {
    (async () => {
      const productResp = await axios.get('/api/products');

      if (productResp.status === 200 || productResp.status === 201) {
        dispatch({
          type: ACTION_TYPE.INITIALIZE_PRODUCTS,
          payload: productResp.data.products,
        });
      }

      const categoryResp = await axios.get('/api/categories');

      if (categoryResp.status === 200 || categoryResp.status === 201) {
        dispatch({
          type: ACTION_TYPE.INITIALIZE_CATEGORIES,
          payload: categoryResp.data.categories,
        });
      }

      const cartResp = await GetCartItems({ encodedToken: token });
      if (cartResp === 200 || cartResp === 201) {
        dispatch({
          type: ACTION_TYPE.SETCART_LIST,
          payload: { cartlist: cartResp.data.cart },
        });
      }
    })();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
const useData = () => useContext(DataContext);

export { useData, DataProvider };
