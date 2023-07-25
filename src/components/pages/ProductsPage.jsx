import React from 'react';
import Navigation from '../navigation/Navigation';
import Production from './products/Rolets';

function ProductsPage() {
  return (
    <>
      <Navigation show={true} />
      <Production />
    </>
  );
}

export default ProductsPage;
