import PropTypes from 'prop-types';
import { Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';

export default function MainProductionGallery(props) {
  const ProductionVariants = {
    initial: { y: 150, scale: 1 },
    animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
  };

  const MotionProps = {
    initial: 'initial',
    whileInView: 'animate',
    whileHover: 'hover',
    whileTap: 'hover',
    viewport: { once: true },
    variants: ProductionVariants,
  };

  return (
    <Grid mt={{ xs: 5 }} container justifyContent="center" alignItems="center">
      {props.images.map((image) => (
        <Box
          m={2}
          {...MotionProps}
          component={motion.div}
          key={image.alt}
          sx={{ display: 'inline-block' }}
        >
          <InsertLinkRoundedIcon htmlColor="white" key={image.alt} />

          <img
            src={image.src}
            alt={image.alt}
            width={550}
            height={300}
            key={image.src}
          />
        </Box>
      ))}
    </Grid>
  );
}

MainProductionGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};