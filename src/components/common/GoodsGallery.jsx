import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const GoodsGallery = ({ images, alts }) => {
    return (
        <Box>
        <Carousel autoPlay showArrows={true} interval={5000}>
          {images.map((image, index) => (
            <img
              key={`image-${index}`} // Унікальний ключ
              src={image}
              alt={alts[index] || `Image ${index}`} // Використовуємо альтернативний текст або дефолтний
            />
          ))}
        </Carousel>
      </Box>
    );
  };

export default GoodsGallery;