import { createContext, useContext, useReducer } from 'react';

const OrderContext = createContext();

const initialValue = {
  orders: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ORDERS':
      return { ...state, orders: [action.payload, ...state.orders] };

    default:
      return state;
  }
};

const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <OrderContext.Provider value={{ orderState, orderDispatch }}>
        {children}
      </OrderContext.Provider>
    </>
  );
};

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };
