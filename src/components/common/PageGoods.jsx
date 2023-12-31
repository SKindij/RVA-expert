import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import GoodsGallery from './GoodsGallery';
import GoodsContent from './GoodsContent';

const PageGoods = ({ blocksData }) => {

  return (
    <Grid container spacing={4} sx={{ flexGrow: 1, width: '100%', padding: '1rem' }}>
    {blocksData.map((blockData, index) => (
    <React.Fragment key={index}>
      {index % 2 === 0 ? (
        // Парна ітерація: <GoodsContent/> ліворуч, <GoodsGallery/> праворуч
        <>
          <Grid item xs={12} md={6}>
            <GoodsContent
              title={blockData.title}
              firstDescription={blockData.firstDescription}
              secondDescription={blockData.secondDescription}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GoodsGallery images={blockData.images} alts={blockData.alts} />
          </Grid>
        </>
      ) : (
        // Непарна ітерація: <GoodsGallery/> ліворуч, <GoodsContent/> праворуч
        <>
          <Grid item xs={12} md={6}>
            <GoodsGallery images={blockData.images} alts={blockData.alts} />
          </Grid>
          <Grid item xs={12} md={6}>
            <GoodsContent
              title={blockData.title}
              firstDescription={blockData.firstDescription}
              secondDescription={blockData.secondDescription}
            />
          </Grid>
        </>
      )}
    </React.Fragment>
  ))}
  </Grid>
  );
};
PageGoods.propTypes = {
  blocksData: PropTypes.array.isRequired, // Замініть на відповідний тип даних
};

export default PageGoods;