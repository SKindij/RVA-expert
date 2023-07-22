import { Box } from '@mui/material';
import Image from 'next/image';
import { MainGalleryWrapperBox } from './MainGalleryWrapper';

export default function MainGalleryBox(props) {
  return (
    <>
      <MainGalleryWrapperBox>
        <Box sx={{ display: 'flex', m: 0, p: 0 }}>
          {props.images.map((image) => {
            return (
              <Box key={image.src} sx={{ width: '100%', marginX: '0.2rem' }}>
                <Image
                  width={270}
                  height={203}
                  src
                  src={image.src}
                  alt="изображение"
                />
              </Box>
            );
          })}
        </Box>
      </MainGalleryWrapperBox>
    </>
  );
}
