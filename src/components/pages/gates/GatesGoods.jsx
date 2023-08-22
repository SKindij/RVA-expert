import { Box, Grid } from '@mui/material';
import SectionTitle from '../../common/SectionTitle';
import GoodsGallery from '../../common/GoodsGallery';
import GoodsContent from '../../common/GoodsContent';

const GatesGoods = () => {
  // тут дані для кожного блоку
  const blockAData = {
      title: "Заголовок блоку A",
      firstDescription: "Перша частина опису блоку A",
      secondDescription: "Друга частина опису блоку A",
      images: ["/images/p-gates/image1a.jpg", "/images/p-gates/image2a.jpg", "/images/p-gates/image3a.jpg"],
      alts: ["коричневі ворота", "секційні ворота", "гаражні ворота"]
  };
  const blockBData = {
    title: "Заголовок блоку B",
    firstDescription: "Перша частина опису блоку B",
    secondDescription: "Друга частина опису блоку B",
    images: ["/images/p-gates/image1b.jpg", "/images/p-gates/image2b.jpg", "/images/p-gates/image3b.jpg"],
    alts: ["ворота антрацит", "секційні ворота", "гаражні ворота"]
  };
  const blockCData = {
    title: "Заголовок блоку C",
    firstDescription: "Перша частина опису блоку C",
    secondDescription: "Друга частина опису блоку C",
    images: ["/images/p-gates/image1c.jpg", "/images/p-gates/image2c.jpg", "/images/p-gates/image3c.jpg"],
    alts: ["коричневі ворота", "секційні ворота", "промислові ворота"]
  };
  const blockDData = {
    title: "Заголовок блоку D",
    firstDescription: "Перша частина опису блоку D",
    secondDescription: "Друга частина опису блоку D",
    images: ["/images/p-gates/image1d.jpg", "/images/p-gates/image2d.jpg", "/images/p-gates/image3d.jpg"],
    alts: ["коричневі ворота", "секційні ворота", "промислові ворота"]
  };

  return (
    <Box>
      <SectionTitle title="Разом із нами" colored="можливо все!" />
      <Grid container spacing={4}>

        {/* Перший блок */}
        <Grid item xs={12} md={6}>
          <GoodsGallery images={blockAData.images} alts={blockAData.alts} />
        </Grid>
        <Grid item xs={12} md={6}>
          <GoodsContent
            title={blockAData.title}
            firstDescription={blockAData.firstDescription}
            secondDescription={blockAData.secondDescription}
          />
        </Grid>   

        {/* Другий блок */}
        <Grid item xs={12} md={6}>
          <GoodsContent
            title={blockBData.title}
            firstDescription={blockBData.firstDescription}
            secondDescription={blockBData.secondDescription}
          />
        </Grid> 
        <Grid item xs={12} md={6}>
          <GoodsGallery images={blockBData.images} alts={blockBData.alts}/>
        </Grid>

        {/* Третій блок */}
        <Grid item xs={12} md={6}>
          <GoodsGallery images={blockCData.images} alts={blockCData.alts}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <GoodsContent
            title={blockCData.title}
            firstDescriptionn={blockCData.firstDescription}
            secondDescription={blockCData.secondDescription}
          />
        </Grid> 

        {/* Четвертий блок */}
        <Grid item xs={12} md={6}>
          <GoodsContent
            title={blockDData.title}
            firstDescription={blockDData.firstDescription}
            secondDescription={blockDData.secondDescription}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <GoodsGallery images={blockDData.images} alts={blockDData.alts}/>
        </Grid>

      </Grid>  
    </Box>
  );
};

export default GatesGoods;