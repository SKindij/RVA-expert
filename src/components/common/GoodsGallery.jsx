import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMediaQuery } from '@mui/material';

const GoodsGallery = ({ images, alts }) => {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const showThumbs = isLargeScreen ? true : false;
  return (
    <Box
      display="flex" justifyContent="center"
      alignItems="center" flexDirection="column"
      mx="auto" p={1} boxShadow={2} borderRadius={8}
      maxWidth="100%" overflow="hidden"
    >
      <Carousel 
        autoPlay interval={5000} infiniteLoop
        style={{ width: '100%' }} swipeScrollTolerance={100} 
        showArrows={true} swipeable={true}
        showThumbs={showThumbs} thumbWidth={70}
        preventMovementUntilSwipeScrollTolerance
      >
          {images.map((image, index) => (
            <div key={`image-${index}`} style={{ height: '70vh' }}>
              <img            
                src={image} alt={alts[index]}
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '20px' }}
              />
            </div>
            
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