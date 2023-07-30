import PropTypes from 'prop-types';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import SectionTitle from '../../common/SectionTitle';

const types = [
  {
    image: '/images/p-rolets/window-rolet.png',
    title: 'Ролети з підвищеною ефективністю',
    description: 'Наші ролети - це ідеальний вибір для захисту вашого житла від негоди та вторгнень. Виготовлені зі спеціального алюмінієвого сплаву, вони забезпечать вам надійний захист, додаткову ізоляцію та зниження витрат на опалення.'
  },
  {
    image: '/images/p-rolets/garage-rolet.png',
    title: 'Дизайн та Комфорт',
    description: 'Наші ролети - це не тільки захист, але й стильний дизайн для вашого будинку. З великим вибором кольорів та функціональних опцій, ви зможете підібрати ролети, що ідеально впишуться в дизайн вашої оселі. Насолоджуйтесь комфортом та естетикою разом з нами!'
  },
  {
    image: '/images/p-rolets/door-rolet.png',
    title: 'Система Управління за Допомогою Смартфона',
    description: 'Ми пропонуємо ролети з інтегрованою системою управління за допомогою смартфона, що дозволяє вам контролювати ролети навіть здалеку. Зручно та безпечно, ви зможете керувати ролетами з будь-якої точки світу, забезпечуючи додатковий рівень безпеки для вашого дому.'
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
      <SectionTitle title="Ефективний Захист та" colored="Елегантний Дизайн" />

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