import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const GoodsGallery = ({ images, alts }) => {
    return (
        <Box
          display="flex" justifyContent="center"
          alignItems="center" flexDirection="column"
          mx="auto" p={1} boxShadow={2} borderRadius={8}
          maxWidth="100%"
        >
          <Carousel autoPlay interval={5000} style={{ width: '100%' }}>
            {images.map((image, index) => (
              <img
                key={`image-${index}`}
                src={image}
                alt={alts[index]}
                style={{ maxWidth: '100%', maxHeight:'400px', objectFit: 'contain', borderRadius: '20px' }}
              />
            ))}
          </Carousel>
        </Box>
    );
};
GoodsGallery.propTypes = {
  images: PropTypes.array.isRequired,
  alts: PropTypes.array.isRequired,
};
export default GoodsGallery;