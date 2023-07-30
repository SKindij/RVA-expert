import PropTypes from 'prop-types';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import SectionTitle from '../../common/SectionTitle';

const types = [
  {
    image: '/images/p-gates/residential-gate.png',
    title: 'Гаражні ворота з пружинами розтягу',
    description: 'Перевірена часом класика - ворота з пружинами розтягу. Надійність та довговічність - ось наша гарантія. Відкрийте для себе широкий вибір стилів та кольорів для гармонійного поєднання з будь-яким дизайном.'
  },
  {
    image: '/images/p-gates/sectional-door.png',
    title: 'Побутові ворота з торсіоном',
    description: 'Забезпечте зручність та надійність для вашого дому з побутовими воротами з торсіонним механізмом. Насолоджуйтесь легкістю в управлінні та високою безпекою, завдяки інноваційним рішенням та технологіям.'
  },
  {
    image: '/images/p-gates/industrial-gate.png',
    title: 'Секційні промислові ворота',
    description: 'Робота з великими просторами потребує надійних інженерних рішень. Наші промислові ворота забезпечать ефективне управління логістикою та відмінний рівень безпеки. Відкрийте нові перспективи для вашого бізнесу!'
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


const GateTypes = () => {
  return (
    <Box>
      <SectionTitle title="Доступні гаражні" colored="секційні ворота" />

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

export default GateTypes;