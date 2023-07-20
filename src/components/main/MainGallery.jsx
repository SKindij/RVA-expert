import { Box } from '@mui/material';
import classes from './Gallery/MainGallery.module.css';
import MainGalleryBox from './Gallery/MainGalleryBox';
import { MainGalleryWrapper } from './Gallery/MainGalleryWrapper';

const images = [
  { src: '/images/slider/ngm-slider-1.jpg' },
  { src: '/images/slider/ngm-slider-2.jpg' },
  { src: '/images/slider/ngm-slider-3.jpg' },
  { src: '/images/slider/ngm-slider-4.jpg' },
  { src: '/images/slider/ngm-slider-5.jpg' },
  { src: '/images/slider/ngm-slider-6.jpg' },
];

const images2 = [
  { src: '/images/slider/ngm-slider-7.jpg' },
  { src: '/images/slider/ngm-slider-8.jpg' },
  { src: '/images/slider/ngm-slider-9.jpg' },
  { src: '/images/slider/ngm-slider-10.jpg' },
  { src: '/images/slider/ngm-slider-11.jpg' },
  { src: '/images/slider/ngm-slider-12.jpg' },
];

export default function MainGallery() {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <MainGalleryWrapper className={classes.article}>
        <MainGalleryBox images={images} />
        <MainGalleryBox images={images} />
      </MainGalleryWrapper>
      <MainGalleryWrapper className={classes.article}>
        <MainGalleryBox images={images2} />
        <MainGalleryBox images={images2} />
      </MainGalleryWrapper>
    </Box>
  );
}
