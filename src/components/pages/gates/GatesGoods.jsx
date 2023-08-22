import { Box, Grid } from '@mui/material';
import SectionTitle from '../../common/SectionTitle';
import GoodsGallery from '../../common/GoodsGallery';
import GoodsContent from '../../common/GoodsContent';

const GatesGoods = () => {
  // тут дані для кожного блоку
  const blockAData = {
      title: "Сучасні коричневі секційні ворота",
      firstDescription: "Дивіться наш вибір сучасних коричневих секційних воріт, що відмінно вписуються в будь-який стиль будівель.",
      secondDescription: "З нами ви отримаєте надійні ворота з якісними панелями, які виглядають стильно та елегантно.",
      images: ["/images/p-gates/image1a.jpg", "/images/p-gates/image2a.jpg", "/images/p-gates/image3a.jpg"],
      alts: ["коричневі ворота", "підготовка проєму під ворота", "ворота з коричневих панелей"]
  };
  const blockBData = {
    title: "Ефектні антрацитові секційні ворота",
    firstDescription: "Приділіть увагу нашим воротам у сучасному антрацитовому відтінку, які додають вашій власній домівці сучасність та стиль.",
    secondDescription: "Наші антрацитові ворота виготовлені з найкращих матеріалів та забезпечують найвищий рівень безпеки та зручності.",
    images: ["/images/p-gates/image1b.jpg", "/images/p-gates/image2b.jpg", "/images/p-gates/image3b.jpg"],
    alts: ["ворота антрацит дошка", "секційні ворота із середини гаража", "гаражні ворота додому"]
  };
  const blockCData = {
    title: "Промислові ворота з високоякісних панелей",
    firstDescription: "Ознайомтеся з нашою колекцією промислових воріт зі сріблястим відтінком, які ідеально підійдуть для комерційних приміщень.",
    secondDescription: "Наші ворота відзначаються надійною конструкцією та можливостями додаткової автоматизації для вашої зручності.",
    images: ["/images/p-gates/image1c.jpg", "/images/p-gates/image2c.jpg", "/images/p-gates/image3c.jpg"],
    alts: ["ворота з панелей срібло", "монтаж воріт на склад", "промислові ворота з цепним приводом"]
  };
  const blockDData = {
    title: "Стильні ворота з хвірткою для будь-якого підприємства",
    firstDescription: "Додайте елегантності та функціональності до вашого підприємства з нашими воротами з хвірткою, що виглядають неймовірно.",
    secondDescription: "Ми пропонуємо ворота з різними конфігураціями та можливостями налаштування, щоб задовольнити ваші потреби.",
    images: ["/images/p-gates/image1d.jpg", "/images/p-gates/image2d.jpg", "/images/p-gates/image3d.jpg"],
    alts: ["ворота із хвірткою", "проєм для промислових воріт", "ворота на підприємство"]
  };

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