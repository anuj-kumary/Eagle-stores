import "./ProductCard.css";


export const ProductCard = ({Product}) => {

  const {img , name , price} = Product;
  return (
    <>
      {/* <div className="product__cards">
            <div className="product__card">
            <div className="product__image">
            <img src={img} alt="i Mac" />
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
      </div> */}
    </>
  );
};
