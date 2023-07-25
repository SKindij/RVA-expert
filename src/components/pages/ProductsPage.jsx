import React from 'react';
import Navigation from '../src/components/Navigation/Navigation';
import Production from '../src/components/Production/Production';

function ProductsPage() {
  return (
    <>
      <Navigation show={true} />
      <Production />
    </>
  );
}

export default ProductsPage;
