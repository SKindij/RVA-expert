import React from 'react';
import Navigation from '../src/components/Navigation/Navigation';
import Production from '../src/components/Production/Production';

function ProductionPage() {
  return (
    <>
      <Navigation show={true} />
      <Production />
    </>
  );
}

export default ProductionPage;
