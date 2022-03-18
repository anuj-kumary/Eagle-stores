import {
  categoryFilter,
  ratingFilter,
  sortByPrice,
  priceRangeFilter,
  searchFilter,
} from "../../../../utils/filterFunction";
import "./ProductCard.css";

export const ProductCard = ({ state }) => {
  let newData = categoryFilter(state.products, state.filter.categories);
  newData = ratingFilter(newData, state.filter.rating);
  newData = sortByPrice(newData, state.filter.sortBy);
  newData = priceRangeFilter(newData, state.filter.priceRange);
  newData = searchFilter(newData, state.filter.search);

  return (
    <div className="product__cards">
      {newData.map((item) => {
        const { _id, img, name, price } = item;

        return (
          <div key={_id}>
            <div className="product__card">
              <div className="product__image">
                <img src={img} alt={name} />
                <span className="product__favourite">
                  <i className="fas fa-heart"></i>
                </span>
              </div>
              <h3 className="product__heading">{name}</h3>
              <div className="product__price">&#8377; {price}</div>
              <div className="product__button">
                <button className="btn btn__primary">Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
