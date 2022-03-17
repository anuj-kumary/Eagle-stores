import { ProductAside } from "./components/ProductAside/ProductAside";
import { ProductMain } from "./components/ProductMain/ProductMain";

export const Product = () => {
  return (
    <>
      <div className="product__container">
        <ProductAside />
        <ProductMain />
      </div>
    </>
  );
};
