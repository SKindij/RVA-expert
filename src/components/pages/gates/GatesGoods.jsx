import { Box, Grid } from '@mui/material';
import SectionTitle from '../../common/SectionTitle';
import GoodsGallery from '../../common/GoodsGallery';
import GoodsContent from '../../common/GoodsContent';

const GatesGoods = () => {
  return (
    <Box>
      <SectionTitle title="Разом із нами" colored="можливо все!" />
      <Grid container spacing={4}>

        {/* Перший блок */}
        <Grid item xs={12} md={6}>
          <GoodsGallery />
        </Grid>
        <Grid item xs={12} md={6}>
          <GoodsContent
            title="Заголовок блоку A"
            description="Опис блоку A"
          />
        </Grid>   

        {/* Другий блок */}
        <Grid item xs={12} md={6}>
          <GoodsContent
            title="Заголовок блоку B"
            description="Опис блоку B"
          />
        </Grid> 
        <Grid item xs={12} md={6}>
          <GoodsGallery />
        </Grid>

        {/* Третій блок */}
        <Grid item xs={12} md={6}>
          <GoodsGallery />
        </Grid>
        <Grid item xs={12} md={6}>
          <GoodsContent
            title="Заголовок блоку C"
            description="Опис блоку C"
          />
        </Grid> 

        {/* Четвертий блок */}
        <Grid item xs={12} md={6}>
          <GoodsContent
            title="Заголовок блоку D"
            description="Опис блоку D"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <GoodsGallery />
        </Grid>

      </Grid>  
    </Box>
  );
};

export default GatesGoods;