import { Box, Grid } from '@mui/material';
import SectionTitle from './SectionTitle';
import GoodsGallery from './GoodsGallery';
import GoodsContent from './GoodsContent';

const GatesGoods = () => {
 
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
      <SectionTitle title="Разом із нами" colored="можливо все!" />
      <Grid container spacing={4} sx={{ flexGrow: 1, width: '100%', padding: '1rem' }}>

        {/* Перший блок */}
        <Grid item xs={12} md={7}>
          <GoodsGallery images={blockAData.images} alts={blockAData.alts} />
        </Grid>
        <Grid item xs={12} md={5}>
          <GoodsContent
            title={blockAData.title}
            firstDescription={blockAData.firstDescription}
            secondDescription={blockAData.secondDescription}
          />
        </Grid>   

        {/* Другий блок */}
        <Grid item xs={12} md={5}>
          <GoodsContent
            title={blockBData.title}
            firstDescription={blockBData.firstDescription}
            secondDescription={blockBData.secondDescription}
          />
        </Grid> 
        <Grid item xs={12} md={7}>
          <GoodsGallery images={blockBData.images} alts={blockBData.alts}/>
        </Grid>

        {/* Третій блок */}
        <Grid item xs={12} md={7}>
          <GoodsGallery images={blockCData.images} alts={blockCData.alts}/>
        </Grid>
        <Grid item xs={12} md={5}>
          <GoodsContent
            title={blockCData.title}
            firstDescription={blockCData.firstDescription}
            secondDescription={blockCData.secondDescription}
          />
        </Grid> 

        {/* Четвертий блок */}
        <Grid item xs={12} md={5}>
          <GoodsContent
            title={blockDData.title}
            firstDescription={blockDData.firstDescription}
            secondDescription={blockDData.secondDescription}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <GoodsGallery images={blockDData.images} alts={blockDData.alts}/>
        </Grid>

      </Grid>  
    </Box>
  );
};

export default GatesGoods;