import { Box } from '@mui/material';
import { MainGalleryWrapperBox } from './MainGalleryWrapper';
import PropTypes from 'prop-types';

export default function MainGalleryBox(props) {
  return (
    <>
      <MainGalleryWrapperBox>
        <Box sx={{ display: 'flex', m: 0, p: 0 }}>
          {props.images.map((image) => {
            return (
              <Box key={image.src} sx={{ width: '100%', marginX: '0.2rem' }}>
                <img
                  style={{ width: '100%', height: 'auto' }}
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

// PropTypes для перевірки пропсів
MainGalleryBox.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};
