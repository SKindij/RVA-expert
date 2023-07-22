import PropTypes from 'prop-types';
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import HealingRoundedIcon from '@mui/icons-material/HealingRounded';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const svgVariants = {
  initial: { rotateY: 0 },
  whileHover: {
    rotateY: [0, -180, 0],
    transition: { duration: 1 },
  },
};

export default function MainWhyUsBoxSVG(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // Додайте додаткові стилі, якщо потрібно
      }}
    >
      {props.componentId === 1 ? (
        <ArchitectureRoundedIcon
          fontSize="inherit" htmlColor={props.color}
          sx={{ marginTop: { sx: '1rem', lg: '4rem' } }}
          component={motion.svg} variants={svgVariants}
        />
      ) : props.componentId === 2 ? (
        <BorderColorRoundedIcon
          fontSize="inherit" htmlColor={props.color}
          sx={{ marginTop: { sx: '1rem', lg: '4rem' } }}
          component={motion.svg} variants={svgVariants}
        />
      ) : props.componentId === 3 ? (
        <PrecisionManufacturingRoundedIcon
          fontSize="inherit" htmlColor={props.color}
          sx={{ marginTop: { sx: '1rem', lg: '4rem' } }}
          component={motion.svg} variants={svgVariants}
        />
      ) : props.componentId === 4 ? (
        <DoneOutlineRoundedIcon
          fontSize="inherit" htmlColor={props.color}
          sx={{ marginTop: { sx: '1rem', lg: '4rem' } }}
          component={motion.svg} variants={svgVariants}
        />
      ) : props.componentId === 5 ? (
        <HealingRoundedIcon
          fontSize="inherit" htmlColor={props.color}
          sx={{ marginTop: { sx: '1rem', lg: '4rem' } }}
          component={motion.svg} variants={svgVariants}
        />
      ) : (
        null
      )}
    </Box>
  );
}

MainWhyUsBoxSVG.propTypes = {
  componentId: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};