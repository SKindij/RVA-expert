import { Box, Typography } from '@mui/material';

const GoodsContent = ({ title, firstDescription, secondDescription }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph>
        {firstDescription}
      </Typography>
      <Typography variant="body1">
        {secondDescription}
      </Typography>
    </Box>
  );
};

export default GoodsContent;