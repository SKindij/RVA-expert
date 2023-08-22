import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Gallery = () => {
  return (
    <Box>
      <Carousel autoPlay showArrows={true} interval={5000}>
        <div>
          <img src="image1.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="image2.jpg" alt="Image 2" />
        </div>
        {/* Додайте більше слайдів за потреби */}
      </Carousel>
    </Box>
  );
};

export default Gallery;