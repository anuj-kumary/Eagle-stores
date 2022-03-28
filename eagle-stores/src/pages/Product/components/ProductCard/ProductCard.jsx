import {
  categoryFilter,
  ratingFilter,
  sortByPrice,
  priceRangeFilter,
  searchFilter,
} from '../../../../utils/filterFunction';
import Product from './components/Product';

export const ProductCard = ({ state }) => {
  let newData = categoryFilter(state.products, state.filter.categories);
  newData = ratingFilter(newData, state.filter.rating);
  newData = sortByPrice(newData, state.filter.sortBy);
  newData = priceRangeFilter(newData, state.filter.priceRange);
  newData = searchFilter(newData, state.filter.search);
  return (
    <div className='product__cards'>
      {newData.map((item) => {
        return <Product item={item} key={item._id} />;
      })}
    </div>
  );
};
