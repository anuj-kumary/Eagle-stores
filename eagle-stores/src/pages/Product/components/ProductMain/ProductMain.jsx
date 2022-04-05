import './ProductMain.css';
import { useEffect } from 'react';
import { useData } from '../../../../context/data/data-context';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductMain = () => {
  const { state } = useData();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <main className='product'>
        <h4 className='heading fw__500'>
          Showing All Products
          <span className='product__subtext fw__400'>
            (Showing {state.products.length} products)
          </span>
        </h4>
        <ProductCard state={state} />
      </main>
    </>
  );
};
