import { Box, Typography } from '@mui/material';

const GoodsContent = ({ title, firstDescription, secondDescription }) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" 
      height="100%" p={3} boxShadow={2} borderRadius={8}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box my={3}>
        <Typography variant="body1" paragraph>
          {firstDescription}
        </Typography>
      </Box>
      <Typography variant="body1">
        {secondDescription}
      </Typography>
    </Box>
  );
};

export default GoodsContent;