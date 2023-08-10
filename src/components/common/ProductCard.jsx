import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ProductCard = ({ title, image, product, description, kit, price, exchangeRate }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        boxShadow: (theme) => theme.shadows[3],
        transition: 'box-shadow 0.3s',
        '&:hover': {boxShadow: (theme) => theme.shadows[6]},
      }}
    >
      <CardMedia
        sx={{height: 0, paddingTop: '56.25%'}} // 16:9      
        image={image} title={title}
      />
      <CardContent sx={{ padding: (theme) => theme.spacing(2)}}>
        <Typography variant="h6"
          sx={{marginBottom: (theme) => theme.spacing(1)}}
        >
          {title}
        </Typography>
        <Typography variant="body2"
          sx={{color: '#888', marginBottom: 3}}
        >
          {product}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {kit}
        </Typography>
		<Typography variant="body2"
          sx={{
            color: (theme) => theme.palette.text.secondary,
            marginBottom: (theme) => theme.spacing(2),
          }}
        >
          {description}
        </Typography>
        <Typography variant="subtitle1"
          sx={{fontWeight: 'bold', color: (theme) => theme.palette.primary.main}}
        >
          {(price * exchangeRate).toFixed(0)} грн
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
