import { Box } from '@mui/material';
import classes from './Gallery/MainGallery.module.css';
import MainGalleryBox from './Gallery/MainGalleryBox';
import { MainGalleryWrapper } from './Gallery/MainGalleryWrapper';

const images = [
  { src: '/images/m-gallery/rva-gallery-1.jpg' },
  { src: '/images/m-gallery/rva-gallery-2.jpg' },
  { src: '/images/m-gallery/rva-gallery-3.jpg' },
  { src: '/images/m-gallery/rva-gallery-4.jpg' },
  { src: '/images/m-gallery/rva-gallery-5.jpg' },
  { src: '/images/m-gallery/rva-gallery-6.jpg' },
];

const images2 = [
  { src: '/images/m-gallery/rva-gallery-7.jpg' },
  { src: '/images/m-gallery/rva-gallery-8.jpg' },
  { src: '/images/m-gallery/rva-gallery-9.jpg' },
  { src: '/images/m-gallery/rva-gallery-10.jpg' },
  { src: '/images/m-gallery/rva-gallery-11.jpg' },
  { src: '/images/m-gallery/rva-gallery-12.jpg' },
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
