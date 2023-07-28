import PropTypes from 'prop-types';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import SectionTitle from '../../common/SectionTitle';

const types = [
  {
    image: '/images/p-motors/sliding-gates.png',
    title: 'Відкатні двигуни',
    description: 'Спрощуйте своє життя з нашими відкатними двигунами для воріт. Забудьте про напруження відкривати ворота вручну! Наші сучасні технології дозволять Вам зручно та безпечно управляти воротами.'
  },
  {
    image: '/images/p-motors/Electric-gates.png',
    title: 'Розпашні двигуни',
    description: 'Надайте своїм воротам елегантність та функціональність з розпашними двигунами. Розпашні системи забезпечать комфортне відкривання воріт, дозволяючи Вам насолоджуватись моментами заїзду та виїзду без зайвих зусиль.'
  },
  {
    image: '/images/p-motors/Boom-barrier.png',
    title: 'Шлагбауми Боларди',
    description: 'Забезпечте контроль доступу до Вашої території з нашими шлагбаумами та болардами. Наші шлагбауми гарантують надійний контроль трафіку, дозволяючи Вам ефективно керувати заїздом та виїздом транспорту.'
  }
];
const Service = ({ service }) => {
  const { image, title, description } = service;
  return (
    <Card
      sx={{
        maxWidth: 345, pt: 2,
        boxShadow: 'none', mx: 'auto',
        '&:hover': {boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)'}
      }}
    >
      <CardMedia
        component='img' image={image} alt={title}
        sx={{ height: 140, width: 'auto', mx: 'auto' }}       
      />
      <CardContent sx={{textAlign: 'center'}}>
        <Typography gutterBottom variant="h5" component="div" sx={{
          fontWeight: 'bold'
        }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

Service.propTypes = {
  service: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};


const MotorTypes = () => {
  return (
    <Box>
      <SectionTitle title="Ми надаємо наступні" colored="товари та послуги" />

      <Grid sx={{ mt: 4 }} container spacing={2}>
        {types.map( (service, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Service service={service} />
          </Grid>
        ) )}
      </Grid>
    </Box>
  );
};

export default MotorTypes;