import { ACTION_TYPE } from '../utils/actionType';

export const initialistate = {
  filter: {
    categories: {},
    sortBy: '',
    rating: '',
    search: '',
    priceRange: 0,
  },
  products: [],
  cartlist: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIALIZE_PRODUCTS:
      const maxRange = action.payload.reduce((acc, curr) => {
        if (Number(curr.price) > acc) return Number(curr.price);
        return acc;
      }, 0);

      return {
        ...state,
        products: action.payload,
        filter: {
          ...state.filter,
          priceRange: maxRange,
        },
      };

    case ACTION_TYPE.INITIALIZE_CATEGORIES:
      const categories = action.payload.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.categoryName]: false,
        };
      }, {});
      return {
        ...state,
        filter: {
          ...state.filter,
          categories: categories,
        },
      };

    case ACTION_TYPE.FILTER_CHANGE:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.filterType]: action.payload.filterValue,
        },
      };

    case ACTION_TYPE.CLEAR_FILTER:
      const clearCategories = Object.keys(state.filter.categories).reduce(
        (acc, curr) => {
          return {
            ...acc,
            [curr]: false,
          };
        },
        {}
      );

    case ACTION_TYPE.SETCART_LIST:
      return {
        ...state,
        cartlist: action.payload.cartlist,
      };

      const clearPriceRange = state.products.reduce((acc, curr) => {
        if (Number(curr.price) > acc) return Number(curr.price);
        return acc;
      }, 0);

      return {
        ...state,
        filter: {
          categories: clearCategories,
          sortBy: '',
          rating: '',
          priceRange: clearPriceRange,
        },
      };

    default:
      return state;
  }
};
